import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { FaMapMarkerAlt, FaTimesCircle } from 'react-icons/fa';

interface FileUpload {
  file: File;
  progress: number;
}
interface ErrorResponse {
  message: string;
  error?: any; // Adjust the type as needed based on the structure of your error object
}

interface UploadedFile {
  filename: string; 
  mimetype: string;
}

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'Call',
    company: '',
    serviceLocation: '',
    accessInstructions: '',
    scanType: 'Residential',
    preferredDate: '',
    backupDate: '',
    purpose: 'Real Estate',
    projectScope: '',
    numberOfRooms: [],
    outputFormats: [] as string[],
    additionalServices: [] as string[],
    completionDate: '',
    specialInstructions: '',
    budgetRange: 500,
    projectTimeline: 'Flexible',
    deliveryPreferences: [] as string[],
    termsAccepted: false,
    privacyConsent: false,
    showcaseConsent: false,
  });


  const [step, setStep] = useState(1);
  const [fileUploads, setFileUploads] = useState<FileUpload[]>([]);
  const [uploadedFilePaths, setUploadedFilePaths] = useState<string[]>([]); // Store file paths
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [autoLocation, setAutoLocation] = useState('');
  const [manualLocation, setManualLocation] = useState('');
  const [locationError, setLocationError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: FormDataKeys; value: string }; // Use FormDataKeys type for name
  
    if ((e.target as HTMLInputElement).type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: isChecked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  const handleLocationFetch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationUrl = `https://www.google.com/maps/place/${latitude},${longitude}/`;
          setAutoLocation(locationUrl);
          setManualLocation(''); // Clear manual input if auto location is fetched
          setFormData((prev) => ({ ...prev, serviceLocation: locationUrl }));
        },
        (error) => {
          setLocationError('Unable to retrieve your location.');
        }
      );
    } else {
      setLocationError('Geolocation is not supported by this browser.');
    }
  };

  const handleManualLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setManualLocation(value);
    setAutoLocation(''); // Clear auto location if manual input is changed
    setFormData((prev) => ({ ...prev, serviceLocation: value })); // Set the manual location to serviceLocation
  };

  const handleRemoveAutoLocation = () => {
    setAutoLocation('');
    setManualLocation(''); // Optional: Clear manual location as well
    setFormData((prev) => ({ ...prev, serviceLocation: '' })); // Clear the serviceLocation
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map(file => ({ file, progress: 0 }));
      setFileUploads(files);
    }
  };

  type FormDataKeys = keyof typeof formData;
  const handleMultiSelectChange = (name: FormDataKeys, value: string) => {
    setFormData(prev => {
      const selected = prev[name] as string[]; // Ensure `prev[name]` is treated as a string array
      return {
        ...prev,
        [name]: selected.includes(value) ? selected.filter(v => v !== value) : [...selected, value],
      };
    });
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
        const bookingResponse = await axios.post('/api/booking/create', formData);
        const bookingId = bookingResponse.data.bookingId;

        // Now save the uploaded files
        await axios.post('/api/files/save', { bookingId, files: uploadedFiles }); // Ensure uploadedFiles has filePath and fileType

        alert("Booking and files saved successfully");
        window.location.reload();
    } catch (error) {
        console.error("Booking error", error);
    }
};

  

const handleFileUpload = async () => {
  const formData = new FormData();
  fileUploads.forEach((fileUpload) => {
      // Explicitly specify the type of 'fileUpload.file'
      formData.append('files', fileUpload.file);
  });

  try {
      const response = await axios.post('/api/files/upload', formData, {
          onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const progress = Math.round((loaded * 100) / (total || 1));
              setFileUploads((prevFiles) =>
                  prevFiles.map((file) => ({
                      ...file,
                      progress: progress,
                  }))
              );
          },
      });

      // Make sure to define the expected response structure
      const fileDetails = response.data.files.map((file: UploadedFile, index: number) => ({
          filePath: `/uploads/${file.filename}`,
          fileType: file.mimetype,
      }));

      setUploadedFiles(fileDetails);
      alert(response.data.message);
  } catch (error) {
      console.error("File upload error", error);
  }
};


  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
<div className="container px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
  
    <h2 className="text-2xl font-bold mb-6 text-center">Book an appointment</h2>
  

  <form className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto" onSubmit={handleSubmit}>
    <div className="step-indicator text-center text-base font-medium text-gray-500 mb-6">
      <p className="bg-gray-100 inline-block py-1 px-3 rounded-full">Step {step} of 5</p>
    </div>

    {step === 1 && (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
        
        <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4" />

        <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4" />

        <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4" />

        <label className="block text-sm font-medium text-gray-600 mb-1">Preferred Contact Method</label>
        <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4">
          <option value="Call">Call</option>
          <option value="Text">Text</option>
        </select>

        <label className="block text-sm font-medium text-gray-600 mb-1">Company/Organization Name</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-6" />

        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none" type="button" onClick={prevStep}>Previous</button>
          <button className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none" type="button" onClick={nextStep}>Next</button>
        </div>
      </div>
    )}


{step === 2 && (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Service Details</h3>

    <div className="flex items-center mb-4">
      <FaMapMarkerAlt className="w-5 h-5 text-gray-600 mr-2" />
      <button
        type="button"
        className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={handleLocationFetch}
        disabled={!!manualLocation}
      >
        Fetch Current Location
      </button>
    </div>

    {autoLocation && (
      <div className="flex items-center mb-4">
        <span className="mr-2 text-gray-700">Location:</span>
        <a
          href={autoLocation}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Location Detected
        </a>
        <button
          type="button"
          onClick={handleRemoveAutoLocation}
          className="ml-2 text-red-600 hover:text-red-800"
        >
          <FaTimesCircle className="w-5 h-5 inline" />
        </button>
      </div>
    )}

    <label className="block text-sm font-medium text-gray-700 mb-1">Enter Location Manually</label>
    <input
      type="text"
      name="serviceLocation"
      value={manualLocation}
      onChange={handleManualLocationChange}
      required
      disabled={!!autoLocation}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4"
    />

    <label className="block text-sm font-medium text-gray-700 mb-1">Access Instructions</label>
    <textarea
      name="accessInstructions"
      value={formData.accessInstructions}
      onChange={handleChange}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-28 px-4 py-2 mb-4"
    ></textarea>

    <label className="block text-sm font-medium text-gray-700 mb-1">Type of 3D Scan</label>
    <select
      name="scanType"
      value={formData.scanType}
      onChange={handleChange}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4"
    >
      <option value="Residential">Residential</option>
      <option value="Commercial">Commercial</option>
    </select>

    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Files (max 15 MB each)</label>
    <input
      type="file"
      multiple
      onChange={handleFileChange}
      className="block w-full mt-1 border-2 border-gray-300 dark:border-neutral-600 border-dashed rounded-lg px-6 pt-5 pb-6 mb-4"
    />
    <button
      type="button"
      onClick={handleFileUpload}
      className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
    >
      Upload
    </button>

    {fileUploads.map((fileUpload, idx) => (
      <div key={idx} className="mb-2">
        <p className="text-sm text-gray-700">
          {fileUpload.file.name} - {fileUpload.progress}%
        </p>
        <div className="h-2 bg-gray-200 rounded">
          <div
            className="h-full bg-green-500 rounded"
            style={{ width: `${fileUpload.progress}%`, transition: 'width 0.5s ease-in-out' }}
          ></div>
        </div>
      </div>
    ))}

    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date/Time</label>
    <input
      type="datetime-local"
      name="preferredDate"
      value={formData.preferredDate}
      onChange={handleChange}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4"
    />

    <label className="block text-sm font-medium text-gray-700 mb-1">Backup Date/Time</label>
    <input
      type="datetime-local"
      name="backupDate"
      value={formData.backupDate}
      onChange={handleChange}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-6"
    />

    <div className="flex justify-between">
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
        type="button"
        onClick={prevStep}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
        type="button"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  </div>
)}



{step === 3 && (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Project Specifications</h3>

    <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of the Scan</label>
    <select
      name="purpose"
      value={formData.purpose}
      onChange={handleChange}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4"
    >
      <option value="Real Estate">Real Estate</option>
      <option value="Construction">Construction</option>
      <option value="Marketing">Marketing</option>
    </select>

    <label className="block text-sm font-medium text-gray-700 mb-2">Project Scope</label>
    <input
      type="text"
      name="projectScope"
      value={formData.projectScope}
      onChange={handleChange}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-4"
    />

    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms/Areas</label>
    <select
      multiple
      value={formData.numberOfRooms}
      onChange={e => handleMultiSelectChange('numberOfRooms', e.target.value)}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-28 px-4 py-2 mb-4"
    >
      <option value="Living Room">Living Room</option>
      <option value="Kitchen">Kitchen</option>
      <option value="Bedroom">Bedroom</option>
    </select>

    <label className="block text-sm font-medium text-gray-700 mb-2">Output Format Preferences</label>
    <select
      multiple
      value={formData.outputFormats}
      onChange={e => handleMultiSelectChange('outputFormats', e.target.value)}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-32 px-4 py-2 mb-4"
    >
      <option value="OBJ">OBJ</option>
      <option value="STL">STL</option>
      <option value="PLY">PLY</option>
      <option value="PDF">PDF</option>
      <option value="MP4">MP4</option>
    </select>

    <div className="flex justify-between mt-6">
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
        type="button"
        onClick={prevStep}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
        type="button"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  </div>
)}


{step === 4 && (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Additional Information</h3>

    <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
    <textarea
      name="specialInstructions"
      value={formData.specialInstructions}
      onChange={handleChange}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-28 px-4 py-3 mb-4"
    ></textarea>

    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium text-gray-800">{formData.budgetRange}</span>
    </div>
    <input
      type="range"
      name="budgetRange"
      min="0"
      max="5000"
      value={formData.budgetRange}
      onChange={handleChange}
      className="w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg h-2 mb-6"
    />

    <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
    <select
      name="projectTimeline"
      value={formData.projectTimeline}
      onChange={handleChange}
      className="block w-full border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-lg text-sm font-normal h-10 px-4 py-2 mb-6"
    >
      <option value="Flexible">Flexible</option>
      <option value="Urgent">Urgent</option>
      <option value="Within a Week">Within a Week</option>
    </select>

    <div className="flex justify-between mt-6">
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
        type="button"
        onClick={prevStep}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
        type="button"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  </div>
)}


{step === 5 && (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Agreements and Consent</h3>

    <label className="flex items-center mb-4">
      <input
        className="form-checkbox h-5 w-5 text-blue-600 mr-2 rounded"
        type="checkbox"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={handleChange}
      />
      <span className="text-gray-700">I accept the terms and conditions</span>
    </label>

    <label className="flex items-center mb-4">
      <input
        className="form-checkbox h-5 w-5 text-blue-600 mr-2 rounded"
        type="checkbox"
        name="privacyConsent"
        checked={formData.privacyConsent}
        onChange={handleChange}
      />
      <span className="text-gray-700">I agree to the privacy policy</span>
    </label>

    <label className="flex items-center mb-4">
      <input
        className="form-checkbox h-5 w-5 text-blue-600 mr-2 rounded"
        type="checkbox"
        name="showcaseConsent"
        checked={formData.showcaseConsent}
        onChange={handleChange}
      />
      <span className="text-gray-700">I consent to showcase the project on the website</span>
    </label>

    <div className="flex justify-between mt-6">
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
        type="button"
        onClick={prevStep}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
        type="submit"
      >
        Submit Booking
      </button>
    </div>
  </div>
)}


    {/* {step > 1 && (
      <button className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 mt-4" type="button" onClick={prevStep}>Previous</button>
    )} */}
  </form>
</div>

  );
};

export default BookingPage;

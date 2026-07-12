import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


// Configuration
// And we are not writting credentials here writing on .env file and calling from there
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_COULD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


// Just a copy pasted Code
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: "auto"
            }
        );

        // file has been uploaded successfully (just for display or kind of checking)
        // console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)     // remove that locally saved file (have for testing purpose only)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath); // Remove the locally saved file if upload fails
        return null;
    }
};

export {uploadOnCloudinary}
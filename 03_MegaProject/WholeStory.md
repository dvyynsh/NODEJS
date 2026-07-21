## The Big Picture

Client (Customer)
        │
        ▼
Routes (Receptionist)
        │
        ▼
Middleware (Security / Rules)
        │
        ▼
Controller (Chef)
        │
        ▼
Model (Kitchen Ingredients)
        │
        ▼
Database (Warehouse)


📂 node_modules/
This is where all installed npm packages live.
example: express, mongoose, jsonwebtoken, bcrypt, multer, cloudinary

📂 public/
This stores public files.
Usually pdf, videos, static files
temp/ -> Temporary storage

📂 src/
This is where all your actual backend code live

    📂controllers/
    This contains the business logic.
    Example: User clicks Login
    Controller Decides: validate input, Find User, compare password

    📂 db/
    index.js -> This connects to MongoDB.

    📂 middlewares/
    Middleware means -> Something that executes before the controller.
    Examples:
    1. auth.middleware.js -> Checks Is user logged in ? 
    2. multer.middleware.js -> Responsible for: Receiving files, Upload Image

    📂 models/
    This defines the shape (schema) of your MongoDB documents.
    Exp: User.models.js have {username, email, password, avatar}.
    Exp: video.models.js have {title, description, videofile, owner}.
    Exp: subscription.model.js have Suscriber -> channel.

   ## Restaurant analogy
    Model is the recipe.
    Controller cooks using that recipe.

    📂 routes/
    Routes decide Which URL Calls which controller.
    Example: router.post("/register", registerUser).
    Routes contain almost no logic Just mapping.

    📂 utils/
    Utilities Reusable helper code.
    ApiError.js:     Creates consistent/cleaner errors.
    ApiResponse.js:  Creates consistent responses.
    asyncHandler.js: Instead of Try,Catch for every Controller We define asynchandler No repetancy
    cloudinary.js:   For Uploading on Cloudinary

    📄 app.js       -> This creates the Express application.
    📄 constants.js -> Stores fixed values. Like DB_NAME.
    📄 index.js     -> This is the entry point {When we run `npm run dev`}
    📄 .env         -> Stores secret information. {Secret key, PORT, JWT_SECRET}

🔄 Complete Request Flow

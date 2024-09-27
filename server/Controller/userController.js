import User from '../Model/userModel.js';

//Api for 'create'
export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
    
        if (!userData) {
            return res.status(400).json({ message: "User data is required" }); 
        }
        
        const saveData = await userData.save();
        res.status(201).json(saveData); 
    } catch (error) {
        console.error("Error saving user data:", error); 
        res.status(500).json({ error: error.message }); 
    }
};


//Api for 'fetch' user data

export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
    
        if (!userData) {
            return res.status(404).json({ message: "User data is not found" }); 
        }
        res.status(200).json(userData); 
    } catch (error) { 
        res.status(500).json({ error: error.message }); 
    }
};




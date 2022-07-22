const User = require('../../models/User')

const SessionController = {
    async createSession(req, res){
        const { email } = req.body
        try {
            const user = await User.findOne({ email })
            return res.status(200).json(user)
        } catch (err) {
            return res.status(400).json(err)
        }
    }

}

module.exports = SessionController
import * as Yup from 'yup';
import User from '../models/User';


class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        const isValid = await schema.isValid(req.body);

        const emailOrPasswordIncorrect = () => {
            res
                .status(401)
                .json({ error: 'Validation fails' });
        }


        if (!isValid) {
            return emailOrPasswordIncorrect();
        }

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return emailOrPasswordIncorrect();
        }

        const passwordIsValid = await user.checkPassword(password);

        if (!passwordIsValid) {
            return emailOrPasswordIncorrect();
        }

        return res
            .status(201)
            .json({
                id: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin
            });
    }
}

export default new SessionController();
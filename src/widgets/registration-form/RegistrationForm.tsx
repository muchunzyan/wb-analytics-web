// import s from './RegistrationForm.module.css'

const RegistrationForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="login">E-mail</label>
                <input id="login" name="login" type="email"/>
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input id="password" name="passrord" type="password"/>
            </div>
            <div>
                <label htmlFor="password">Введите пароль еще раз</label>
                <input id="password" name="passrord" type="password"/>
            </div>

            <input type="checkbox" id="agrees-terms-of-use" name="agrees-terms-of-use" value="yes"/>
            <label htmlFor="agrees-terms-of-use"> Я принимаю условия Пользовательского соглашения</label>
            <br/>
            <input type="checkbox" id="agrees-personal-data" name="agrees-personal-data" value="yes"/>
            <label htmlFor="subscribe"> Я даю согласие на обработку персональных данных в соответствии с
                Политикой конфиденциальности</label>

            {/*Primary button*/}
            <button type="submit">Зарегистрироваться</button>
        </form>
    )
}

export default RegistrationForm
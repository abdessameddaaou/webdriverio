class Connexion
{
    get Username()
    {
        return $('#user-name')
    }

    get Password()
    {
        return $('#password')
    }

    get LoginBtn()
    {
        return $('#login-button')
    }

    get MessageERR()
    {
        return $('.error-message-container.error')
    }

    get TextMessageERR()
    {
        return $('')
    }

    // +++++++++++++++++++++++++++++++++++++++++ les méthodes ++++++++++++++++++++++++++++++++++++++++

    async typeUsername(username: string){
        await this.Username.setValue(username)
    }

    async typePassword(password: string){
        await this.Password.setValue(password)
    }
}

export default new Connexion()
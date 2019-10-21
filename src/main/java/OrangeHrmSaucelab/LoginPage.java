package OrangeHrmSaucelab;

import org.openqa.selenium.By;

public class LoginPage extends Utlis {

    private By _username=By.id("txtUsername");
    private By _password=By.id("txtPassword");
    private By _loginbutton=By.id("btnLogin");

    public void verifyloginpage()
    {
        asserturl("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials");

       }

    public void enterusername(String usernamedata){
        entertext(_username,usernamedata);
    }
    public void enterpassword(String passworddate){
        entertext(_password,passworddate);
    }
    public void loginbutton(){
        clickOnLocator(_loginbutton);
    }
}

package OrangeHrmSaucelab;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs extends Utlis {
    LoginPage loginPage=new LoginPage();
    DashboardPage dashboardPage=new DashboardPage();

    @Given("^user is on login page$")
    public void userIsOnLoginPage()
    {
      //loginPage.verifyloginpage();
    }

    @When("^user enter \"([^\"]*)\"$")
    public void userEnter(String username)
    {
        loginPage.enterusername(username);
    }

    @And("^enter \"([^\"]*)\"$")
    public void enter(String password)
    {
       loginPage.enterpassword(password);
    }

    @And("^click on login button$")
    public void clickOnLoginButton()
    {
        loginPage.loginbutton();

    }

    @Then("^user should successfully login with valid credencial$")
    public void userShouldSuccessfullyLoginWithValidCredencial()
    {
        dashboardPage.verifyDashboardPage();
    }


}

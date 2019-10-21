package OrangeHrmSaucelab;

public class DashboardPage extends Utlis {

    public void verifyDashboardPage()
    {
        asserturl("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
    }
}

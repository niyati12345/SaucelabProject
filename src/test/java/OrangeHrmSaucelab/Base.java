package OrangeHrmSaucelab;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public class Base extends Utlis {
    BrowserSelector browserSelector=new BrowserSelector();

    //before method
    @BeforeMethod
    public void openBrowser()
    {
        browserSelector.SetUpBrowser();
    }
    //after method
    @AfterMethod
    public void closeBrowser()

    {//screenshot
        //takeScreenshot();
        //quit
        driver.quit();
    }
}

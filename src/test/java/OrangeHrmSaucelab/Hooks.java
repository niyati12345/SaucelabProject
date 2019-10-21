package OrangeHrmSaucelab;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import static org.seleniumhq.jetty9.util.IO.copyFile;

public class Hooks extends Utlis {
    BrowserSelector browserSelector = new BrowserSelector();
    LoadProps loadProps = new LoadProps();

    @Before
    public void openBrowser() {
        browserSelector.SetUpBrowser();
        driver.manage().window().fullscreen();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.get(loadProps.getProperty("Url"));
    }

    @After
    public void closeBrowser(Scenario scenario) {
        if (scenario.isFailed()) {
            String screenshotName = scenario.getName().replaceAll("[.,:;?!]", "") + randomDate() + ".png";
            {
                //This takes a screenshot from the driver at save it to the specified location
                File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
                //Building up the destination path for the screenshot to save
                // Also make sure to create a folder 'screenshot' with in the cucumber- report folder
                File destinationPath = new File(System.getProperty("user.dir") + "/target/Destination/screenshots/" + screenshotName);
                //copy taken screenshot from source location to destination location
                try {
                    copyFile(sourcePath, destinationPath);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                scenario.write("!!!!!!..Scenario Failed.....!!!!!! Please see attached screenshot for the arror/issue");
                //attach the screenshot screenshot to our report
                scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
            }


            driver.quit();
        }
    }
}
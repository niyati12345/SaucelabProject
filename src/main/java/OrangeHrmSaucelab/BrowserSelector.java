package OrangeHrmSaucelab;

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariOptions;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserSelector extends Utlis {
    public static LoadProps loadProps = new LoadProps();

    public static final String USERNAME = loadProps.getProperty("SAUCE_USERNAME");
    public static final String ACCESS_KEY = loadProps.getProperty("SAUCE_ACCESS_KEY");
    public static final String URL = "https://" + USERNAME +":" + ACCESS_KEY + "@ondemand.eu-central-1.saucelabs.com:443/wd/hub";


    public static final boolean SAUCE_LAB = Boolean.parseBoolean(System.getProperty("Sauce"));
     String browser = System.getProperty("browser");
   //public static final String browser = System.getProperty("browser");

    public void SetUpBrowser()
    {
       // String browser = System.getProperty("Browser");
        System.out.println(USERNAME);
        System.out.println(ACCESS_KEY);
        //if Sauce lab is true.........................................................
        if (SAUCE_LAB)
        {
            System.out.println("Running in sauceLab....................with browser" + browser);
            //String browser=System.getProperty("Browser");
            if (browser.equalsIgnoreCase("chrome")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();

                ChromeOptions browserOptions = new ChromeOptions();
                browserOptions.setExperimentalOption("w3c", true);
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "77.0");
                browserOptions.setCapability("sauce:options", sauceOptions);
              // DesiredCapabilities caps =DesiredCapabilities.chrome();
                try {
                    driver = new RemoteWebDriver(new URL(URL), browserOptions);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }

            } else if (browser.equalsIgnoreCase("IE")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();

                InternetExplorerOptions browserOptions = new InternetExplorerOptions();
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "11.285");
                browserOptions.setCapability("sauce:options", sauceOptions);

                try {
                    driver = new RemoteWebDriver(new URL(URL), browserOptions);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browser.equalsIgnoreCase("Firefox")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();

                FirefoxOptions browserOptions = new FirefoxOptions();
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "69.0");
                browserOptions.setCapability("sauce:options", sauceOptions);

                try {
                    driver = new RemoteWebDriver(new URL(URL), browserOptions);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browser.equalsIgnoreCase("Safari")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();

                SafariOptions browserOptions = new SafariOptions();
                browserOptions.setCapability("platformName", "macOS 10.14");
                browserOptions.setCapability("browserVersion", "12.0");
                browserOptions.setCapability("sauce:options", sauceOptions);

                try
                {
                    driver = new RemoteWebDriver(new URL(URL), browserOptions);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }

            } else
                {
                System.out.println("Wrong browser name or empty" + browser);
                }
        }
        else {
            if (browser.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver", "src\\test\\Resource\\BrowserDriver\\chromedriver.exe");
                driver = new ChromeDriver();
            } else if (browser.equalsIgnoreCase("firefox")) {
                System.setProperty("webdriver.gecko.driver", "src\\test\\Resource\\BrowserDriver\\geckodriver.exe");
                driver = new FirefoxDriver();
            } else if (browser.equalsIgnoreCase("ie")) {
                System.setProperty("webdriver.ie.driver", "src\\test\\Resource\\BrowserDriver\\IEDriverServer.exe");
                driver = new InternetExplorerDriver();
            } else

                {
                System.out.println("Your driver is empty or testdata is incorrect" + browser);
                }
        }


    }
}
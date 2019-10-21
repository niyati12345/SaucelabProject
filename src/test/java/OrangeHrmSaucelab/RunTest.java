package OrangeHrmSaucelab;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags = "@Run",format = {"pretty","html:target/Destination"})
//@CucumberOptions(features = "src\\test\\Resources\\Features\\EmailAfriend.feature:4")
public class RunTest {
}

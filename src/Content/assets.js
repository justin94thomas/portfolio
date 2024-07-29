
import Profile from '../Assets/Images/profile-main.png';
import JTLogo from '../Assets/Images/JT-Logo.png';
import JTLogoBlack from '../Assets/Images/JT-Logo-black.jpg';
import ReactLogo from '../Assets/Images/React.png';
import JavaScriptLogo from '../Assets/Images/javascript.png';
import HTML5Logo from '../Assets/Images/html5.png';
import CSS3Logo from '../Assets/Images/css3.png';
import TypeScriptLogo from '../Assets/Images/typescript.png';
import NodeLogo from '../Assets/Images/node.png';
import MongoLogo from '../Assets/Images/mongo.png';
import ExpressLogo from '../Assets/Images/Express.png';
import GitHubLogo from '../Assets/Images/github.png';
import BitBucketLogo from '../Assets/Images/bitbucket.png';
import PostmanLogo from '../Assets/Images/postman.png';
import JiraLogo from '../Assets/Images/jira.png';
import SOQLLogo from '../Assets/Images/soql.png';
import BackgroundSide from '../Assets/Images/background.png';
import { TiMessages } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

const images = {
    Profile: Profile,
    JTLogo: JTLogo,
    JTLogoBlack: JTLogoBlack,
    ReactLogo: ReactLogo,
    JavaScriptLogo: JavaScriptLogo,
    HTML5Logo: HTML5Logo,
    CSS3Logo: CSS3Logo,
    TypeScriptLogo: TypeScriptLogo,
    NodeLogo: NodeLogo,
    BackgroundSide: BackgroundSide
}
const icons = {
    Message: TiMessages,
    Menu: GiHamburgerMenu
}
const skills = {
    react: ReactLogo,
    javascript: JavaScriptLogo,
    html5: HTML5Logo,
    css3: CSS3Logo,
    typescript: TypeScriptLogo,
    node: NodeLogo,
    express: ExpressLogo,
    mongo: MongoLogo,
    soql: SOQLLogo,
    git: GitHubLogo,
    bit: BitBucketLogo,
    postman: PostmanLogo,
    jira: JiraLogo

}
export { images, icons, skills }
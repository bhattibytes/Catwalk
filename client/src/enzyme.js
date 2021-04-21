import 'regenerator-runtime/runtime';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
export { shallow, mount, render };

export default Enzyme;
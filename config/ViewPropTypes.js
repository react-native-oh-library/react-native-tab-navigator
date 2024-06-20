import { View, ViewPropTypes as RNViewPropTypes } from 'react-native';
import { ViewPropTypes as DeprecatedRNViewPropTypes} from 'deprecated-react-native-prop-types';

const ViewPropTypes = RNViewPropTypes || View.propTypes || DeprecatedRNViewPropTypes;

export default ViewPropTypes;
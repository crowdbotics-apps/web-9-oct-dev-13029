import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { TextInput_4: "" }
  render = () => (
    <View style={styles.View_1}>
      <Button
        title="Press me!"
        color="#3366FF"
        style={styles.Button_2}
        onPress={() => alert("Pressed!")}
      />
      <Text style={styles.Text_3}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        style={styles.TextInput_4}
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
    </View>
  )
}

Blank = withStyles(_Blank, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Button } from 'react-native';
import PhoneInput  
    from 'react-native-phone-input'; 
    import CountryPicker  
    from 'react-native-country-picker-modal'; 

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [countryCode, setCountryCode] = useState(''); 
  const [selectedCountry, setSelectedCountry] = 
  useState(null); 
const [countryPickerVisible, setCountryPickerVisible] =  
  useState(false); 
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here
  };
  const onSelectCountry = (country) => { 
    setCountryCode(country.cca2); 
    setSelectedCountry(country); 
    setCountryPickerVisible(false); 
}; 

  return (
    <View style={styles.container}>
      {/* <Image source={require('../images/logoLogin.jpg')} style={styles.logo} /> */}


        {/* <ImageBackground source={require('../images/logoLogin.jpg')}> */}
        <View style={styles.inputContainer}>
        

              <PhoneInput 
                value={phoneNumber} 
                onChangePhoneNumber={(number) => setPhoneNumber(number)} 
                // onPressFlag={toggleCountryPicker} 
                style={styles.phoneInput} 
            /> 
           {countryPickerVisible && ( 
                <CountryPicker 
                    withFilter={true} 
                    withFlagButton={false} 
                    withCountryNameButton={false} 
                    onSelect={onSelectCountry} 
                    onClose={() => setCountryPickerVisible(false)} 
                    // visible={countryPickerVisible} 
                    containerButtonStyle={styles.countryPickerButton} 
                    closeButtonImageStyle={styles.countryPickerCloseButton} 
                /> 
            )} 
        {/* <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        /> */}
              </View>
        {/* </ImageBackground> */}


      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 20, 
  },
  phoneInput: { 
    height: 50, 
    width: '100%', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginBottom: 20, 
    paddingHorizontal: 10, 
}, 
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius:50
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop:50,
    width:'100%'
  },
  countryButton: { 
    marginBottom: 20, 
}, 
countryPickerButton: { 
    borderRadius: 5, 
    backgroundColor: '#fff', 
    marginBottom: 20, 
}, 
countryPickerCloseButton: { 
    width: 20, 
    height: 20, 
}, 
submitButton: {
    color: 'green',
    // fontWeight: 'bold',
    // textAlign: 'center',
    width: 100,
    borderRadius:30 
  },

});

export default LoginScreen;

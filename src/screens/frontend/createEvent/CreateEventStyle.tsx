import { StyleSheet } from "react-native";

const CreateEventStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  heading: {
    color: '#171B2E',
    marginVertical: 32,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  inputview: {
    height: 82,
    flexDirection: 'column',
    gap: 12,
    marginBottom: 16,
    position: 'relative',
  },
  input: {
    height: 52,
    color: '#171B2E',
    borderRadius: 26,
    backgroundColor: '#F9F9F9',
    paddingLeft: 16,
    fontFamily: 'Poppins',
  },
  nametext: {
    color: '#171B2E',
    height: 18,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
    fontFamily: 'Poppins',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '80%',
    fontFamily: 'Poppins',
  },
  botton: {
    height: 52,
    borderRadius: 28,
    backgroundColor: '#6F3DE9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 33,
  },
  bottontext: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
  },
  inputimg: {
    height: 161,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#171B2E',
    marginTop: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  upload: {
    width: 48,
    height: 48,
  },
  optionModel: {
    position: 'absolute',
    zIndex: 995,
    top: 80,
    left: 20,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000000',
    padding: 10,
    fontFamily: 'Poppins',
  },
  arrow: {
    position: 'absolute',
    top: '28%',
    right: '2%',
  },
  arrowimg: {
    height: 24,
    width: 24,
  },
});


export default CreateEventStyle;
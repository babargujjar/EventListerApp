import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    color: '#171B2E',
    flexGrow: 1,
    width: '100%',
    position: 'relative',
  },
  resent: {
    color: '#171B2E',
    marginTop: 32,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    flexDirection: 'row',
    fontFamily: 'Poppins-Bold',
  },
  resentimg: {
    width: 22,
    height: 22,
  },
  resenttext: {
    color: '#171B2E',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
  inputview: {
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
    paddingLeft: 16,
  },
  ongoing: {
    height: 23,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  eventimg: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    position: 'relative',
  },
  eventname: {
    flex: 1,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#171B2E',
    fontFamily: 'Poppins-Bold',
  },
  ongoingtext: {
    color: '#171B2E',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
  ongoingtext2: {
    color: '#6F3DE9',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    height: 18,
    width: 47,
    fontFamily: 'Poppins-Regular',
  },
  mainimgbotton: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFFFFF',
    height: 32,
    width: 73,
    paddingHorizontal: 12,
    paddingVertical: 7,
    color: '#171B2E',
    borderRadius: 40,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  mianview: {
    height: 294,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 4,
    marginHorizontal: 5,
    padding: 6,
    marginBottom: 30,
  },
  imgview: {
    height: 160,
  },
  mainviewtext: {
    height: 96,
    margin: 16,
  },
  operview: {
    height: 45,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    height: 554,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  headingview: {
    height: 23,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  modelheading: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23,
    color: '#171B2E',
    fontFamily: 'Poppins-Bold',
  },
  headingright: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#6F3DE9',
  },
  customMarker: {
    borderWidth: 4,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 16,
    width: 16,
    borderColor: '#6F3DE9',
    marginTop: 23,
  },
  markerText: {
    color: '#000000',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
  botton: {
    height: 52,
    borderRadius: 28,
    backgroundColor: '#6F3DE9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 12,
  },
  bottontext: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
  inputviews: {
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
    fontFamily: 'Poppins-Regular',
  },
  nametext: {
    color: '#171B2E',
    height: 18,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
    fontFamily: 'Poppins-Bold',
  },
  optionModel: {
    position: 'absolute',
    zIndex: 999,
    top: -110,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000000',
    padding: 5,
    fontFamily: 'Poppins-Regular',
  },
  pricerange: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#171B2E',
    marginBottom: 40,
    fontFamily: 'Poppins-Bold',
  },
  hr: {
    borderWidth: 1,
    borderColor: '#EFF0F9',
    marginTop: 55,
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
  modalopacity: {
    width: 42,
    height: 42,
    padding: 10,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#EFF0F9',
  },
  profileimg: {
    height: 19,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  adminpic: {
    width: 18,
    height: 18,
    borderRadius: 100,
    marginRight: 7,
  },
  eventpic: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    position: 'relative',
  },
  adminname: {
    height: 19,
    color: '#171B2E',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  eventprice: {
    backgroundColor: '#EFF0F9',
    height: 32,
    width: 50,
    borderRadius: 40,
    color: '#6F3DE9',
    textAlign: 'center',
    padding: 5,
    fontFamily: 'Poppins-Bold',
  },
  eventdate: {
    color: '#171B2E',
    borderTopWidth: 1,
    borderColor: '#EFF0F9',
    paddingTop: 10,
    fontFamily: 'Poppins-Regular',
  },
  eventpicview: {
    height: 19,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pic: {
    width: 18,
    height: 18,
    borderRadius: 100,
    marginRight: 7,
  },
  imgpic: {
    height: 19,
    color: '#171B2E',
    fontSize: 12,
    fontWeight: '400',
  },
  opacity: {
    borderWidth: 1,
    borderColor: '#EFF0F9',
    marginVertical: 4,
  },
});

export default HomeStyle;

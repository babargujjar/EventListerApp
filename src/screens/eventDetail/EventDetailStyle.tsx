import { StyleSheet } from "react-native";

const EventDetailStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    position: 'relative',
    fontFamily: 'Poppins-Regular',
  },
  topview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginTop: 32,
    height: 42,
    paddingRight: 120,
    alignItems: 'center',
    marginBottom: 30,
  },
  topviewtext: {
    color: '#171B2E',
    lineHeight: 18,
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  topimgview: {
    borderWidth: 1,
    borderColor: '#EFF0F9',
    width: 42,
    height: 42,
    borderRadius: 40,
    padding: 9,
  },
  detailimg: {
    height: 180,
    borderRadius: 16,
    width: '100%',
    marginBottom: 20,
  },
  headingview: {
    height: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headingtext1: {
    color: '#171B2E',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23,
    fontFamily: 'Poppins-Bold',
  },
  headingtext2: {
    backgroundColor: '#EFF0F9',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 40,
    color: '#6F3DE9',
    fontWeight: '500',
    fontSize: 12,
  },
  participate: {
    color: '#171B2E',
    height: 19,
    fontWeight: '600',
    lineHeight: 15,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  desc: {
    height: 142,
    marginTop: 30,
    marginBottom: 33,
  },
  desctext1: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#171B2E',
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
  desctext2: {
    color: '#9496A5',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  profileview: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileimg: {
    height: 32,
    width: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  profiletext: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#171B2E',
    fontFamily: 'Poppins-Regular',
  },
  map: {
    height: 140,
    borderRadius: 16,
    marginVertical: 20,
  },
  maptext: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#171B2E',
    fontFamily: 'Poppins-Bold',
  },
  mapbotton: {
    backgroundColor: 'black',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 40,
    height: 35,
    width: 110,
    position: 'absolute',
    top: '40%',
    left: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  mapbottonicon: {
    height: 15,
    width: 15,
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
  }
});

export default EventDetailStyle;
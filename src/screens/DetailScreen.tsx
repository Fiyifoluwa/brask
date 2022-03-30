import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../assets/svg';
import {
  BLACK,
  BROWN,
  GRAY10,
  GRAY20,
  GRAY30,
  GRAY50,
  GRAY60,
  PRIMARY,
} from '../styles/colors';

const DetailScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={[styles.headerView]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
        <Text
          style={[
            {
              marginLeft: 40,
              fontSize: 20,
              fontWeight: '500',
              color: BROWN,
              fontFamily: 'Inter',
            },
            // { ...Typography.font24, color: colors.black },
            // globalStyles.fontBold,
          ]}>
          Transaction Details
        </Text>
        <View style={{ width: 16, height: 16 }}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingHorizontal: 32,
          paddingVertical: 28,
          backgroundColor: GRAY10,
        }}>
        <View>
          <Text
            style={{
              marginBottom: 12,
              fontSize: 22,
              fontWeight: '600',
              color: PRIMARY,
            }}>
            + $1,190.00
          </Text>
          <View>
            <Text style={{ marginBottom: 4, fontSize: 16, fontWeight: '500' }}>
              Hansel Gretel
            </Text>
            <Text style={{ fontSize: 12, color: GRAY50 }}>
              Yesterday, 03:23AM
            </Text>
          </View>
        </View>
        <View>
          <Text>User Pic</Text>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 28,
          paddingHorizontal: 32,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 32,
          }}>
          <Text style={{ fontSize: 12, color: GRAY50 }}>Status</Text>
          <Text style={{ fontSize: 12, color: BLACK, fontFamily: 'Inter' }}>
            Completed
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 32,
          }}>
          <Text style={{ fontSize: 12, color: GRAY50 }}>Statement</Text>
          <Text style={{ fontSize: 12, color: BLACK, fontFamily: 'Inter' }}>
            Download
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 32,
          }}>
          <Text style={{ fontSize: 12, color: GRAY50 }}>Bank</Text>
          <Text style={{ fontSize: 12, color: BLACK, fontFamily: 'Inter' }}>
            Zenith Bank Ltd
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 32,
          }}>
          <Text style={{ fontSize: 12, color: GRAY50 }}>Category</Text>
          <Text style={{ fontSize: 12, color: BLACK, fontFamily: 'Inter' }}>
            Transfers
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 32,
        }}>
        <Text style={{ paddingBottom: 8 }}>Note</Text>
        <ScrollView
          style={{
            backgroundColor: GRAY20,
            width: '100%',
            borderRadius: 8,
            height: 101,
            padding: 16,
          }}>
          <Text>-</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  headerView: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});

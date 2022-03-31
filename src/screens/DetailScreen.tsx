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
import { colors } from '../styles';

const DetailScreen = ({ navigation, route }: any) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={[styles.headerView]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
        <Text style={[styles.headerText]}>Transaction Details</Text>
        <View style={{ width: 16, height: 16 }}></View>
      </View>

      <View style={styles.detailsView}>
        <View>
          <Text style={styles.amountText}>- ₦{data.amount}</Text>
          <View>
            <Text style={styles.nameText}>{data.accountName}</Text>
            <Text style={styles.smallGreyText}>
              {data.date}, {data.time}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 28,
          paddingHorizontal: 32,
        }}>
        <View style={styles.statusView}>
          <Text style={styles.smallGreyText}>Status</Text>
          <Text style={styles.smallBlackText}>Pending</Text>
        </View>
        <View style={styles.statusItemView}>
          <Text style={styles.smallGreyText}>Bank</Text>
          <Text style={styles.smallBlackText}>{data.selectedBank}</Text>
        </View>
        <View style={styles.statusItemView}>
          <Text style={styles.smallGreyText}>Category</Text>
          <Text style={styles.smallBlackText}>Transfers</Text>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 32,
        }}>
        <Text style={{ paddingBottom: 8 }}>Note</Text>
        <ScrollView style={styles.descriptionView}>
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
  },
  headerText: {
    marginLeft: 40,
    fontSize: 20,
    fontWeight: '500',
    color: colors.BROWN,
    fontFamily: 'Inter',
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 32,
    paddingVertical: 28,
    backgroundColor: colors.GRAY10,
  },
  amountText: {
    marginBottom: 12,
    fontSize: 22,
    fontWeight: '600',
    color: colors.PRIMARY,
  },
  nameText: { marginBottom: 4, fontSize: 16, fontWeight: '500' },
  smallGreyText: { fontSize: 12, color: colors.GRAY50 },
  statusView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 32,
  },
  smallBlackText: { fontSize: 12, color: colors.BLACK, fontFamily: 'Inter' },
  statusItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 32,
  },
  descriptionView: {
    backgroundColor: colors.GRAY20,
    width: '100%',
    borderRadius: 8,
    height: 101,
    padding: 16,
  },
});

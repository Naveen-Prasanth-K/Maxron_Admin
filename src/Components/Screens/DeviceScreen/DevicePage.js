import { useNavigation } from '@react-navigation/native';
import { Icon, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../../../Utilities/GlobalStyles/Colors';
import { CommonStyles } from '../../../Utilities/GlobalStyles/CommonStyles';
import Header from '../../Others/Header';
import MotorOnOff from './MotorOnOff';
import ThreePhase from './ThreePhase';
import Selection from './Selection';

export default function DevicePage({ route }) {

    const { item } = route.params;
    const navigation = useNavigation();

    const [motorStatus, setMotorStatus] = useState(item.motorState);
    const batteryPercentage = Math.min(90, Math.max(10, Math.floor(item.batteryLevel / 10) * 10));

    const motorStatusHandler = () => {
        setMotorStatus(!motorStatus)
    }

    const PumpSettingsHandler = (item) => {
        navigation.navigate('PumpSettingHome', { item: item })
    }

    const DeviceReportHandler = () => {
        navigation.navigate('DeviceReport')
    }

    return (
        <View style={CommonStyles.pageContainer}>
            <Header />
            <ScrollView>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 15, marginBottom: 5 }}>
                        <Text style={styles.deviceName}>{item.deviceName}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={[styles.circle, { backgroundColor: Colors.red }]} />
                            <View style={[styles.circle, { backgroundColor: Colors.yellow }]} />
                            <View style={[styles.circle, { backgroundColor: Colors.blue }]} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                    <Icon
                        type='material-community'
                        name={`signal-cellular-${item.signalStrength}`}
                        size={28}
                        color={Colors.primary}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            type='material-community'
                            name={`battery-${batteryPercentage}`}
                            size={31}
                            color={Colors.primary}
                            style={{ transform: [{ rotate: '90deg' }], marginLeft: 10 }}
                        />
                        <Text style={styles.batteryPercentage}>{batteryPercentage}%</Text>
                    </View>
                </View>
                <View style={styles.onOffContainer}>
                    <Pressable
                        style={({ pressed }) => [pressed && CommonStyles.pressed, styles.onBtnContainer, { opacity: motorStatus === true ? 0.5 : 1 }]}
                        onPress={() => motorStatusHandler()}
                        disabled={motorStatus}
                    >
                        <View style={styles.onBtnSwitch} />
                    </Pressable>
                    <Pressable
                        style={({ pressed }) => [pressed && CommonStyles.pressed, styles.offBtnContainer, { opacity: motorStatus === true ? 1 : 0.5 }]}
                        onPress={() => motorStatusHandler()}
                        disabled={!motorStatus}
                    >
                        <View style={styles.offBtnSwitch} />
                    </Pressable>
                    <MotorOnOff motorState={motorStatus} />
                </View>
                <ThreePhase item={item} />
                {item?.float &&
                    <View style={styles.levelContainer}>
                        <Text style={styles.levelText1}>Float Level</Text>
                        <Text style={styles.levelText2}>{item?.level}</Text>
                    </View>
                }
                <View style={{ marginTop: item?.float != true ? 40 : 0 }}>
                    <Selection item={item} />
                </View>

                <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                    <Button
                        title="Pump Settings"
                        titleStyle={styles.inputTitleStyle}
                        buttonStyle={styles.ButtonContainerStyle}
                        onPress={() => PumpSettingsHandler(item)}
                        icon={{
                            type: 'material-community',
                            name: 'pipe-valve',
                            size: 25,
                            color: 'white',
                        }}
                    />
                    <Button
                        title="Device Report"
                        titleStyle={styles.inputTitleStyle}
                        buttonStyle={styles.ButtonContainerStyle}
                        onPress={() => navigation.navigate('DeviceReport')}
                        icon={{
                            type: 'entypo',
                            name: 'area-graph',
                            size: 20,
                            color: 'white',
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    deviceName: {
        fontSize: wp('6'),
        fontWeight: '600',
    },
    circle: {
        width: wp('5.2'),
        height: wp('5.2'),
        borderWidth: 1,
        borderRadius: wp('5.2') / 2,
        marginHorizontal: 3
    },
    batteryPercentage: {
        fontSize: wp('3.8'),
        fontWeight: '500',
    },
    onBtnSwitch: {
        width: wp('3'),
        height: wp('9'),
        backgroundColor: Colors.primary50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.primary200,
    },
    onBtnContainer: {
        width: wp('22'),
        height: wp('22'),
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: Colors.green
    },
    offBtnContainer: {
        width: wp('22'),
        height: wp('22'),
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: Colors.red,

    },
    offBtnSwitch: {
        width: wp('8'),
        height: wp('8'),
        backgroundColor: Colors.primary50,
        borderRadius: wp('8') / 2,
        borderWidth: 1,
        borderColor: Colors.primary200
    },
    onOffContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 250,
        alignItems: 'center'
    },
    levelContainer: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        borderWidth: 1,
        borderColor: Colors.primary200,
        borderRadius: 10,
        padding: 20
    },
    levelText1: {
        fontSize: wp(4),
        fontWeight: '400'
    },
    levelText2: {
        fontSize: wp(4),
        fontWeight: '500',
        color: Colors.blue
    },
    ButtonContainerStyle: {
        borderRadius: 8,
        height: hp('5%'),
        backgroundColor: Colors.secondary
    },
    inputTitleStyle: {
        fontSize: wp('3.8')
    },


})
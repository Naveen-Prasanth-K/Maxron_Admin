export const DEVICEDATA = [
    {
        rfId: 1,
        deviceName: 'Home Tank 1',
        deviceType: 'Master',
        batteryLevel: '40',
        signalStrength: '2',
        motorState: false, // off 
        RYVolt: '430',
        ampR: '10.5',
        YBVolt: '440',
        ampY: '0.5',
        BRVolt: '410',
        ampB: '11.5',
        level: 'High',
        autoMode: true,
        twoPhase: false,
        lastOnTime: '12.30PM',
        lastOnDate: '12.11.2023',
        lastOffTime: '12.30PM',
        lastOffDate: '12.11.2023',
        //Voltage Settings
        threeLowVolt: '15',
        threeHighVolt: '20',
        threeImbalanceVolt: '45',
        twoLowVolt: '10',
        twoHighVolt: '60',
        //Current Settings
        dryRunScan: true,
        dryRunScanTime: { "hours": 0, "minutes": 0, "seconds": 55 },
        threeDryAmps: '15',
        twoDryAmps: '12',
        overLoadScan: false,
        overLoadScanTime: { "hours": 0, "minutes": 0, "seconds": 40 },
        onRelayTime: { "hours": 0, "minutes": 0, "seconds": 5 },
        offRelayTime: { "hours": 0, "minutes": 0, "seconds": 15 },
        starToDeltaTime: { "hours": 0, "minutes": 0, "seconds": 25 },
        onDelayTime: { "hours": 0, "minutes": 0, "seconds": 51 },
        powerOnDelayTime: { "hours": 0, "minutes": 0, "seconds": 53 },
        iotOrsms: 'SMS',
        smsFeedback: true,
        pushNotifications: false,
        autoOrManual: 'Auto',
        //Timer Settings
        cyclicTimer: true,
        onCyclicTimer: { "hours": 2, "minutes": 30, "seconds": 0 },
        offCyclicTimer: { "hours": 1, "minutes": 42, "seconds": 0 },
        dryRunRestart: true,
        dryRunRestartTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        overloadRestart: true,
        overloadRestartTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        maxRun: true,
        maxRunTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        roomLight: true,
        onRoomLightTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        offRoomLightTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        rtc: true,
        rtcOnTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        rtcOffTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        //Mode Settings
        float: true,
        numbers: [
            {
                userName: 'Naveen',
                mobileNo: 987465123,
                permission: true
            },
            {
                userName: 'Naveen',
                mobileNo: 987465123,
                permission: true
            },

        ],
    },
    {
        rfId: 2,
        deviceName: 'Home Tank 2',
        deviceType: 'Master',
        batteryLevel: '25',
        signalStrength: '1',
        motorState: true, // on 
        RYVolt: '430',
        ampR: '10.5',
        YBVolt: '440',
        ampY: '0.5',
        BRVolt: '410',
        ampB: '11.5',
        level: 'Low',
        autoMode: false,
        twoPhase: true,
        lastOnTime: '12.30PM',
        lastOnDate: '12.11.2023',
        lastOffTime: '12.30PM',
        lastOffDate: '12.11.2023',
        //Voltage Settings
        threeLowVolt: '15',
        threeHighVolt: '20',
        threeImbalanceVolt: '45',
        twoLowVolt: '10',
        twoHighVolt: '60',
        //Current Settings
        dryRunScan: true,
        dryRunScanTime: { "hours": 0, "minutes": 0, "seconds": 55 },
        threeDryAmps: '15',
        twoDryAmps: '12',
        overLoadScan: false,
        overLoadScanTime: { "hours": 0, "minutes": 0, "seconds": 55 },
        onRelayTime: { "hours": 0, "minutes": 0, "seconds": 5 },
        offRelayTime: { "hours": 0, "minutes": 0, "seconds": 15 },
        starToDeltaTime: { "hours": 0, "minutes": 0, "seconds": 25 },
        onDelayTime: { "hours": 0, "minutes": 0, "seconds": 51 },
        powerOnDelayTime: { "hours": 0, "minutes": 0, "seconds": 53 },
        iotOrsms: 'SMS',
        smsFeedback: true,
        pushNotifications: false,
        autoOrManual: 'Manual',
        //Timer Settings
        cyclicTimer: true,
        onCyclicTimer: { "hours": 2, "minutes": 30, "seconds": 0 },
        offCyclicTimer: { "hours": 1, "minutes": 42, "seconds": 0 },
        dryRunRestart: true,
        dryRunRestartTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        overloadRestart: true,
        overloadRestartTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        maxRun: true,
        maxRunTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        roomLight: true,
        onRoomLightTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        offRoomLightTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        rtc: true,
        rtcOnTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        rtcOffTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        //Mode Settings
        float: true,
        numbers: [
            {
                userName: 'Naveen',
                mobileNo: 987465123,
                permission: true
            },
            {
                userName: 'Naveen',
                mobileNo: 987465123,
                permission: true
            },

        ],
    },
    {
        rfId: 3,
        deviceName: 'Home Tank 3',
        deviceType: 'Others',
        batteryLevel: '72',
        signalStrength: '3',
        motorState: true, // on
        RYVolt: '430',
        ampR: '10.5',
        YBVolt: '440',
        ampY: '0.5',
        BRVolt: '410',
        ampB: '11.5',
        level: 'Low',
        autoMode: true,
        twoPhase: false,
        lastOnTime: '12.30PM',
        lastOnDate: '12.11.2023',
        lastOffTime: '12.30PM',
        lastOffDate: '12.11.2023',
        //Voltage Settings
        threeLowVolt: '15',
        threeHighVolt: '20',
        threeImbalanceVolt: '45',
        twoLowVolt: '10',
        twoHighVolt: '60',
        //Current Settings
        dryRunScan: true,
        dryRunScanTime: { "hours": 0, "minutes": 0, "seconds": 55 },
        threeDryAmps: '15',
        twoDryAmps: '12',
        overLoadScan: false,
        overLoadScanTime: { "hours": 0, "minutes": 0, "seconds": 55 },
        onRelayTime: { "hours": 0, "minutes": 0, "seconds": 5 },
        offRelayTime: { "hours": 0, "minutes": 0, "seconds": 15 },
        starToDeltaTime: { "hours": 0, "minutes": 0, "seconds": 25 },
        onDelayTime: { "hours": 0, "minutes": 0, "seconds": 51 },
        powerOnDelayTime: { "hours": 0, "minutes": 0, "seconds": 53 },
        iotOrsms: 'IOT',
        smsFeedback: true,
        pushNotifications: false,
        autoOrManual: 'Auto',
        //Timer Settings
        cyclicTimer: true,
        onCyclicTimer: { "hours": 2, "minutes": 30, "seconds": 0 },
        offCyclicTimer: { "hours": 1, "minutes": 42, "seconds": 0 },
        dryRunRestart: true,
        dryRunRestartTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        overloadRestart: true,
        overloadRestartTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        maxRun: true,
        maxRunTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        roomLight: true,
        onRoomLightTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        offRoomLightTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        rtc: true,
        rtcOnTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        rtcOffTime: { "hours": 0, "minutes": 40, "seconds": 0 },
        //Mode Settings
        float: false,
        numbers: [
            {
                userName: 'Naveen',
                mobileNo: 987465123,
                permission: true
            },
            {
                userName: 'Naveen',
                mobileNo: 987465123,
                permission: true
            },

        ],
    }
]
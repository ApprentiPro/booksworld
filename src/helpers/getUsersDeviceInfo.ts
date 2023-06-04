class GetUsersDeviceInfo {

    getDeviceRatio = () => {


        return {
            deviceWidth: window?.outerWidth, deviceHegth: window?.innerHeight, isMobile:window.outerWidth <= 480
        }
    }

}

export default GetUsersDeviceInfo
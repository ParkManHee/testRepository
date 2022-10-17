class BootNotificationReq {
    constructor(chargeBoxSerialNumber, chargeBoxSerialNumber, chargepointSerialNumber, chargepointVendor, firmwareVersion, iccId, imsi, meterSerialNumber, meterType) {
        this.chargeBoxSerialNumber = chargeBoxSerialNumber,
        this.chargepointModel = chargepointModel,
        this.chargepointSerialNumber = chargepointSerialNumber,
        this.chargepointVendor = chargepointVendor,
        this.firmwareVersion = firmwareVersion,
        this.iccId = iccId,
        this.imsi = imsi,
        this.meterSerialNumber = meterSerialNumber,
        this.meterType = meterType
    }

    get getBootNotificationReq() {
        return this;
    }
};

module.exports = BootNotificationReq();
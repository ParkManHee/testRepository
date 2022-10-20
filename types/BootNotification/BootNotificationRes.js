class BootNotificationRes {
    constructor(currentTime, interval, status) {
        this.currentTime = currentTime,
        this.interval = interval,
        this.status = status;
    }

    get getBootNotificationRes() {
        return this;
    }
};

module.exports = BootNotificationRes();

const modelstatus = require("../model/status");

const getAllStatus = () => {
    const allStatus = modelstatus.getallstatus();
    return allStatus;
};

const getOneStatus = (statusId) => {
    const statusforId = modelstatus.getstatusbyId(statusId);
    return statusforId;
};

const createNewStatus = (StatusData) => {
    const createstatus = modelstatus.createstatus(StatusData);
    return createstatus;
}; 

const updateOneStatus = (statusId, statusData) => {
    const updatestatus = modelstatus.updatestatus(statusId, statusData);
    return updatestatus;
};

const deleteOneStatus = (statusId) => {
    const deleteStatus = modelstatus.deletestatus(statusId)
    return deleteStatus;
};

module.export = {
    getAllStatus,
    getOneStatus,
    createNewStatus,
    updateOneStatus,
    deleteOneStatus
}

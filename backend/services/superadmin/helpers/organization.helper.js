const Organization = require('../../../models/superadminmodels/organization.model');

const createOrganization = async (name="", domain="", userName="", password="", contactPhone="", address={}, logoUrl="", subscriptionPlan="", subscriptionExpiresAt="", createdBy="") => {
    try {
        const organizationExists = await Organization.findOne({ userName });
        if (organizationExists) {
            return {status: false, message: 'Organization already exists'};
        }
        const organization = await Organization.create({
            name,
            domain,
            userName,
            password,
            contactPhone,
            address,
            logoUrl,
            subscriptionPlan,
            subscriptionExpiresAt,
            createdBy,
        });
        return {status: true, message: organization};
    } catch (error) {
        return {status: false, message: error};
    }
}

const readOrganization = async (createdBy="") => {
    try {
        const organization = await Organization.find({ createdBy });
        if (!organization) {
            return {status: false, message: 'Organization Not exists'};
        }
        
        return {status: true, message: organization};
    } catch (error) {
        return {status: false, message: error};
    }
}

const readOneOrganization = async (createdBy="", organizationId="") => {
    try {
        const organization = await Organization.find({ _id: organizationId, createdBy });
        if (!organization) {
            return {status: false, message: 'Organization Not exists'};
        }
        
        return {status: true, message: organization};
    } catch (error) {
        return {status: false, message: error};
    }
}

const updateOrganization = async (organizationId="", name="", domain="", userName="", password="", contactPhone="", address={}, logoUrl="", subscriptionPlan="", subscriptionExpiresAt="", createdBy="") => {
    try {
        const organizationExists = await Organization.findOne({ userName });
        if (!organizationExists) {
            return {status: false, message: 'Organization not exists'};
        }
        const organization = await Organization.findOneAndUpdate(
        { _id: organizationId },
        {
            $set: {
            name,
            domain,
            userName,
            password,
            contactPhone,
            address,
            logoUrl,
            subscriptionPlan,
            subscriptionExpiresAt,
            createdBy,
            },
        },
        { new: true }
        );
        return {status: true, message: organization};
    } catch (error) {
        return {status: false, message: error};
    }
}

const deleteOrganization = async (createdBy="", organizationId="") => {
    try {
        const organization = await Organization.deleteOne({ _id: organizationId, createdBy });
        if (!organization) {
            return {status: false, message: 'Organization Not exists'};
        }
        
        return {status: true, message: organization};
    } catch (error) {
        return {status: false, message: error};
    }
}

module.exports = {
    createOrganization,
    readOrganization,
    readOneOrganization,
    updateOrganization,
    deleteOrganization,
};
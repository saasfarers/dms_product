const { createOrganization, readOrganization, readOneOrganization, updateOrganization, deleteOrganization } = require('../helpers/organization.helper');

const addorganization = async (req, res, next) => {
    try {
        const {
            name,
            domain,
            contactEmail,
            password,
            contactPhone,
            address: { street, city, state, country, postalCode } = {},
            logoUrl,
            subscriptionPlan,
            subscriptionExpiresAt,
            createdBy,
        } = req.body;
        const addressObj = { street, city, state, country, postalCode };
        const organization = await createOrganization(name, domain, contactEmail, password, contactPhone, addressObj, logoUrl, subscriptionPlan, subscriptionExpiresAt, createdBy);
        if(organization.status == false){
            throw new Error(organization.message);
        }

        return res.status(200).json({
            organization,
        });
    } catch (error) {
        next(error);
    }
};

const vieworganization = async (req, res, next) => {
    try {
        const organization = await readOrganization(req.loggedUser);
        if(organization.status == false){
            throw new Error(organization.message);
        }
        return res.status(200).json({
            organization,
        });
    } catch (error) {
        next(error);
    }
};

const viewOneOrganization = async (req, res, next) => {
    try {
        const { organizationId } = req.query;
        const organization = await readOneOrganization(req.loggedUser, organizationId);
        if(organization.status == false){
            throw new Error(organization.message);
        }
        return res.status(200).json({
            organization,
        });
    } catch (error) {
        next(error);
    }
};

const editorganization = async (req, res, next) => {
    try {
        const { organizationId } = req.query;
        const {
            name,
            domain,
            contactEmail,
            password,
            contactPhone,
            address: { street, city, state, country, postalCode } = {},
            logoUrl,
            subscriptionPlan,
            subscriptionExpiresAt,
            createdBy,
        } = req.body;
        const addressObj = { street, city, state, country, postalCode };
        const organization = await updateOrganization(organizationId, name, domain, contactEmail, password, contactPhone, addressObj, logoUrl, subscriptionPlan, subscriptionExpiresAt, createdBy);
        if(organization.status == false){
            throw new Error(organization.message);
        }

        return res.status(200).json({
            organization,
        });
    } catch (error) {
        next(error);
    }
};

const deleteorganization = async (req, res, next) => {
    try {
        const { organizationId } = req.query;
        const organization = await deleteOrganization(req.loggedUser, organizationId);
        if(organization.status == false){
            throw new Error(organization.message);
        }
        return res.status(200).json({
            organization,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addorganization,
    vieworganization,
    viewOneOrganization,
    editorganization,
    deleteorganization,
};
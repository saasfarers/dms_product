export const sampleRegisterfunction = () => {
    console.log('Register helper function');
};

export const handleSetPageData = (e, setPageData) => {
    try {
        const { name, value } = e.target;
        setPageData((prev) => ({
            ...prev,
            [name]: value
        }));
    } catch (error) {
        console.log(error)
    }
};
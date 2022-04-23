import './dashboard.css'

export const Default = () => {
    return <div className="basic-design">
        Default Dashboard page
    </div>
}

export const Activity = () => {
    return <div className="basic-design">
        Default Activity page
    </div>
}

export const Scolarship = () => {
    return <div className="scolarship-wrapper">
        <div className="scolarship-links">
            <span className="scolarship-links-title">Useful Links:</span>
            <span className="scolarship-links-content">MYSY | Digital Gujarat | Food Bill</span>
        </div>
        <div className="scolarship-title">
            Scolarship
        </div>
        <div className="scolarship-fields">
            <div className="scolarship-field">
                <p className="scolarship-field-title">Add Bank Details...</p>
                <button className="scolarship-field-button">Add Details</button>
            </div>
            <div className="scolarship-field">
                <p className="scolarship-field-title">Have you applied for any type of scolarship?</p>
                <button className="scolarship-field-button">Add Details</button>
            </div>
            <div className="scolarship-field">
                <p className="scolarship-field-title">Apply for Bonafide Certificate</p>
                <button className="scolarship-field-button">Bonafide Certificate</button>
            </div>
        </div>
    </div>
}

export const Payment = () => {
    return <div className="basic-design">
        Default Payment page
    </div>
}

export const Profile = () => {
    return <div className="basic-design">
        Default Profile page
    </div>
}

export const About = () => {
    return <div className="basic-design">
        Default About page
    </div>
}
import { Card, Row, Col, Collapse, Tabs } from 'antd'
import { useState } from 'react'
import { allgeinTable, bargeldTable, versicherungTable, bonusTable, bewertungTable } from '../stores/table';
import { CREDIT_DATA } from '../stores/cardData';
const tabList = [
    {
        key: '1',
        label: 'Allgemein',
        children: allgeinTable()
    },
    {
        key: '2',
        label: 'Bargeld',
        children: bargeldTable()
    },
    {
        key: '3',
        label: 'Versicherung',
        children: versicherungTable()
    },
    {
        key: '4',
        label: 'Bonus',
        children: bonusTable()
    },
    {
        key: '5',
        label: 'Bewertung',
        children: bewertungTable()
    },
];
const CreditCardList = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false)
    const handlePanelChange = () => {
        setIsPanelOpen(!isPanelOpen)
    }
    return (
        <div style={{ width: '100%', backgroundColor: 'white' }} className='pt-5 mt-5'>
            <Row align={'center'} gutter={[32, 32]} className='mb-5'>
                {CREDIT_DATA.map(item => {
                    return (
                        <Col xs={24} md={24} lg={24} xl={16} key={item.id}>
                            <Card className='teaserbox teaserbox_eins py-0' actions={[<Collapse expandIconPosition="center" className='mt-0' onChange={handlePanelChange} key={1} items={[
                                {
                                    key: '1',
                                    label: isPanelOpen ? 'Wenige Info' : 'Mehr Info',
                                    children: <Tabs defaultActiveKey="1" items={tabList}></Tabs>,
                                },
                            ]} />]}>
                                <div className='row'>
                                    <div className="middle_content col-md-6 col-lg-2">
                                        <div className="teaserbox_logo logo_bank-norwegian-kreditkarte">
                                            <a target="_blank" data-name="teaser-Bank Norwegian Kreditkarte" data-tracking-section="Kreditkarte" data-tracking-productname="Bank Norwegian Kreditkarte" data-tracking-productid="5266" data-tracking-postid="40184" data-tracking-position="teaser-zwei" data-tracking-logo-position="teaser-zwei">
                                                <img width="399" height="250" src={item.imgURL} className="attachment-full size-full wp-post-image lazyautosizes lazyloaded" alt="Bank Norwegian Kreditkarte" decoding="async" loading="lazy" srcSet={`${item.imgURL} 140w, ${item.imgURL} 200w, https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002-300x188.png 300w, https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002-320x202.png 320w, https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002.png 399w`} data-orig-src="https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002.png" data-srcset="https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002-140x88.png 140w, https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002-200x125.png 200w, https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002-300x188.png 300w, https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002-320x202.png 320w, https://finanzvergleich.com/wp-content/uploads/2023/02/bank_norwegian_credit_card_250px-002.png 399w" data-sizes="auto" sizes="127px" />
                                            </a>
                                        </div>
                                        <a className="product-title" target="_blank" rel="nofollow" data-tracking-productname="Bank Norwegian Kreditkarte" data-tracking-position="teaser-zwei">
                                            {item.name}
                                        </a>
                                    </div>
                                    <div className="teaserbox_price col-md-6 col-lg-2 d-flex justify-content-center">
                                        <div className="price_first_year geb-item d-flex flex-column justify-content-end align-items-start ">
                                            <span className="kosten_pa_1 geb-item-value featured"> 0,00 € </span>
                                            <p className="geb-item-text d-flex justify-content-end">Grundgebühr </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-2 justify-content-start price-box" style={{ display: 'flex' }}>
                                        <div className="abhebegebühren">
                                            <span className="cash_price">{item.abhebegebühren} %</span>
                                            <span className="geb-item-text cash_price_text">
                                                Abhebegebühren
                                                <span className="tipr" data-tip="Abhebungen mit der Barclays Visa sind seitens Barclays an allen VISA Geldautomaten weltweit kostenlos. Eventuelle Gebühren der Automatenbetreiber werden nicht erstattet." data-hasqtip="44">
                                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851">
                                                        </path>
                                                        <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="geb-item-text-secondary">Abhebungen mit der Barclays Visa sind seitens Barclays an allen VISA Geldautomaten weltweit kostenlos. Eventuelle Gebühren der Automatenbetreiber werden nicht erstattet.
                                                </span>
                                            </span>
                                            <span className="zinsen_value">
                                                {item.zins} %
                                            </span>
                                            <span className="geb-item-text">
                                                Zins
                                            </span>
                                        </div>
                                    </div>
                                    <div className="feature_wrap col-md-6 col-lg-3 d-flex align-items-start flex-column bullet-points">
                                        {
                                            item.advantages.map((advantage, index) => (
                                                <span key={index} className="kk_feature_1 kk_feature">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9954 4.57656C15.2292 4.78113 15.2529 5.1365 15.0483 5.37029L7.17332 14.3703C7.07081 14.4875 6.92432 14.5569 6.76872 14.5621C6.61312 14.5673 6.46234 14.5077 6.35225 14.3976L2.97725 11.0226C2.75758 10.803 2.75758 10.4468 2.97725 10.2271C3.19692 10.0075 3.55308 10.0075 3.77275 10.2271L6.7226 13.177L14.2017 4.62948C14.4062 4.39568 14.7616 4.37199 14.9954 4.57656Z" fill="#404674">
                                                        </path>
                                                    </svg>
                                                    <span className="kk_feature_text">
                                                        {advantage}
                                                    </span>
                                                </span>
                                            ))
                                        }
                                    </div>
                                    <div className="new-note col-lg-1 col-md-10 d-flex justify-content-center align-items-center">
                                        <div className="product_note" data-id="783" data-type="teaser" data-note="eins">
                                            <span className="note_outer note_content">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none"> <path d="M21.1067 65.9885C19.574 67.2134 17.3217 66.9723 16.2559 65.325C13.2799 60.7251 11.3991 55.4845 10.7816 50.0085C10.031 43.352 11.1777 36.619 14.0893 30.5862C17.001 24.5534 21.5589 19.4668 27.2373 15.9132C32.9156 12.3596 39.483 10.4839 46.1816 10.5024C52.8803 10.521 59.4371 12.433 65.0958 16.018C70.7544 19.6029 75.2841 24.7147 78.1623 30.7635C81.0405 36.8123 82.1499 43.5516 81.3625 50.2038C80.7147 55.6763 78.8049 60.9064 75.8035 65.4897C74.7287 67.1311 72.475 67.3598 70.9492 66.1264C69.4233 64.8931 69.2078 62.6659 70.2413 60.9981C72.4229 57.4777 73.8165 53.5099 74.3067 49.3686C74.9366 44.0468 74.0491 38.6554 71.7465 33.8163C69.444 28.9773 65.8202 24.8879 61.2933 22.0199C56.7664 19.152 51.5209 17.6223 46.162 17.6075C40.8031 17.5927 35.5492 19.0932 31.0065 21.9361C26.4638 24.779 22.8174 28.8483 20.4881 33.6745C18.1588 38.5007 17.2415 43.8872 17.842 49.2123C18.3092 53.3563 19.6809 57.3317 21.8429 60.8642C22.8672 62.5377 22.6394 64.7636 21.1067 65.9885Z" fill="#E8E8EE"></path> <path d="M21.1067 65.9885C19.574 67.2134 17.3217 66.9723 16.2559 65.325C13.6129 61.2398 11.8302 56.6438 11.033 51.8184C10.0422 45.8213 10.6068 39.6703 12.6726 33.9537C14.7385 28.2372 18.2366 23.1463 22.8322 19.168C27.4279 15.1898 32.9675 12.4572 38.9211 11.2318C44.8747 10.0063 51.0431 10.3289 56.8364 12.1688C62.6296 14.0086 67.8539 17.3041 72.0095 21.7401C76.1651 26.176 79.1131 31.604 80.5713 37.5049C81.7447 42.253 81.922 47.1793 81.1072 51.9763C80.7787 53.9106 78.8047 55.0216 76.9129 54.5016C75.021 53.9816 73.9326 52.0266 74.2127 50.0847C74.734 46.4697 74.5553 42.7767 73.6737 39.2095C72.5071 34.4888 70.1488 30.1464 66.8243 26.5976C63.4998 23.0488 59.3204 20.4124 54.6858 18.9406C50.0511 17.4687 45.1164 17.2106 40.3535 18.191C35.5907 19.1713 31.159 21.3574 27.4825 24.54C23.8059 27.7226 21.0075 31.7953 19.3548 36.3685C17.7021 40.9418 17.2504 45.8626 18.0431 50.6603C18.642 54.2856 19.9363 57.7491 21.8429 60.8642C22.8672 62.5377 22.6394 64.7636 21.1067 65.9885Z" fill="#65A4FE"></path>
                                                </svg>
                                                <span className="note-value">1,1 </span>
                                            </span>
                                            <span className="note_text medium_text note_content">Exzellent</span>
                                        </div>
                                    </div>
                                    <div className="teaserbox_cta col-md-10 col-lg-2 d-flex align-items-center">
                                        <a href="https://finanzvergleich.com/financeads.php?id=1320&amp;subid=c7bc853cad87f763" target="_self" data-name="teaser-Gebührenfrei Mastercard Gold" data-tracking-section="Kreditkarte" data-tracking-productname="Gebührenfrei Mastercard Gold" data-tracking-productid="1320" data-tracking-postid="1320" data-tracking-position="teaser-eins" className="apply_button fusion-button button-flat fusion-button-round button-default button-4">
                                            <span className="fusion-button-text">Zum Angebot ›</span>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    )
                })}
                <Col xs={24} md={24} lg={24} xl={16} >
                    <p style={{ textAlign: 'right', color: '#404674', fontSize: '16px' }}>Stand Januar 2024</p>
                </Col>
            </Row>
        </div>
    )
}

export default CreditCardList;
import { CheckCircleOutlined, CloseCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
export const allgeinTable = () => {
    return (
        <div className='tab-content table-1'>
            <table className="product-detail-table product-allgemein-table">
                <tbody>
                    <tr>
                        <td>
                            <u><strong>Allgemeines</strong></u>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Kartenanbieter
                        </td>
                        <td>gebührenfrei.de
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Kartenname
                        </td>
                        <td>
                            Gebührenfrei Mastercard Gold
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Kartengesellschaft
                        </td>
                        <td>
                            Mastercard
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Karten-Art
                        </td>
                        <td>
                            Credit
                            <span className="tipr" data-tip="Diese Karte bietet Dir die Möglichkeit, den genutzten Kreditrahmen in Raten auszugleichen." data-hasqtip="2" aria-describedby="qtip-0">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851">
                                    </path>
                                    <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851">
                                    </path>
                                </svg>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Rechnungsausgleich
                        </td>
                        <td>
                            Überweisung, flexible Rückzahlung
                            <span className="tipr" data-tip="Wenn Du die Ratenzahlung nutzt, musst Du pro Monat mind. 3&nbsp;% des genutzten Kreditrahmens bzw. mind. 30&nbsp;€ per Überweisung zurückzahlen. Du kannst Dein Kreditkartenkonto aber auch jederzeit vollständig ausgleichen, um Zinsen zu sparen." data-hasqtip="3" aria-describedby="qtip-0"> <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851">
                                </path>
                                <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851">
                                </path>
                            </svg>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <u><strong>Grundgebühr &amp; Zinsen</strong></u>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Kartengebühr pro Jahr
                        </td>
                        <td>0 €</td>
                    </tr>
                    <tr>
                        <td>Eff. Jahreszins</td>
                        <td>24,69 %</td>
                    </tr>
                    <tr>
                        <td>
                            <u><strong>Eigenschaften &amp; Funktionen</strong></u>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Girokonto bei Anbieter nötig
                        </td>
                        <td>
                            Nein
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Partnerkarte
                        </td>
                        <td>Nein</td>
                    </tr>
                    <tr>
                        <td>Kontaktlos bezahlen</td>
                        <td>Ja</td>
                    </tr>
                    <tr>
                        <td>Mobil bezahlen</td>
                        <td>
                            <CheckCircleOutlined style={{ color: '#7ab51d' }} /> Apple Pay<br />
                            <CheckCircleOutlined style={{ color: '#7ab51d' }} /> Google Pay
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <u><strong>Weitere Infos</strong></u>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Haftung bei Kartenverlust</td>
                        <td>50 €</td>
                    </tr>
                    <tr>
                        <td>Ersatzkarte</td>
                        <td>0 €</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const bargeldTable = () => {
    return (
        <div className='tab-content table-2'>
            <table className="product-detail-table product-berechnung-table">
                <tbody>
                    <tr>
                        <td><u><strong>Gebühren bei Bezahlung</strong></u></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Karteneinsatz Inland</td>
                        <td>0,00 %</td>
                    </tr>
                    <tr>
                        <td>Karteneinsatz Euro-Zone</td>
                        <td>0,00 %</td>
                    </tr>
                    <tr>
                        <td>Karteneinsatz im Ausland</td>
                        <td>0,00 % <span className="tipr" data-tip="Der zugrunde gelegte Wechselkurs von Mastercard kann sich vom EZB-Referenzkurs unterscheiden und insofern ein zusätzliches Währungsumrechnungsentgelt enthalten." data-hasqtip="4" aria-describedby="qtip-0"> <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851"></path>
                            <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851"></path>
                        </svg>
                        </span>
                        </td>
                    </tr>
                    <tr>
                        <td><u><strong>Gebühren Bargeld abheben</strong></u></td>
                        <td>
                            <span className="tipr" data-tip="Die Bank erhebt keine pauschale Gebühr auf Bargeldabhebungen. Stattdessen fallen auf ausgezahlte Beträge ab dem ersten Tag Sollzinsen an. Eventuelle Gebühren der Automatenbetreiber werden nicht erstattet." data-hasqtip="5" aria-describedby="qtip-0">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851"></path>
                                    <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851"></path>
                                </svg>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Bargeld abheben Inland</td>
                        <td>0 %</td>
                    </tr>
                    <tr>
                        <td>Bargeld abheben Euro-Zone</td>
                        <td>0 %</td>
                    </tr>
                    <tr>
                        <td>Bargeld abheben Ausland</td>
                        <td>0 % <span className="tipr" data-tip="Der zugrunde gelegte Wechselkurs von Mastercard kann sich vom EZB-Referenzkurs unterscheiden und insofern ein zusätzliches Währungsumrechnungsentgelt enthalten." data-hasqtip="6" aria-describedby="qtip-0">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851"></path>
                                <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851"></path>
                            </svg>
                        </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const versicherungTable = () => {
    return (
        <div className='tab-content table-2'>
            <table className="product-detail-table product-konditionen-table">
                <tbody>
                    <tr>
                        <td> Auslandskrankenversicherung </td>
                        <td> <CheckCircleOutlined style={{ color: '#7ab51d' }} /></td>
                    </tr>
                    <tr>
                        <td> Reiseunfallversicherung </td>
                        <td> <CheckCircleOutlined style={{ color: '#7ab51d' }} /> </td>
                    </tr>
                    <tr>
                        <td> Reiserücktrittsversicherung </td>
                        <td> <CheckCircleOutlined style={{ color: '#7ab51d' }} /> </td>
                    </tr>
                    <tr>
                        <td> Reisegepäckversicherung </td>
                        <td> <CheckCircleOutlined style={{ color: '#7ab51d' }} /> </td>
                    </tr>
                    <tr>
                        <td> Rechtsschutz für Mietwagen </td>
                        <td> <CloseCircleOutlined style={{ color: '#d91e18' }} /></td>
                    </tr>
                    <tr>
                        <td> Haftpflicht für Mietwagen </td>
                        <td> <CloseCircleOutlined style={{ color: '#d91e18' }} /> </td>
                    </tr>
                    <tr>
                        <td> Vollkaskoversicherung für Mietwagen </td>
                        <td> <CloseCircleOutlined style={{ color: '#d91e18' }} /> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const bonusTable = () => {
    return (
        <div className='tab-content table-2'>
            <table className="product-detail-table">
                <tbody>
                    <tr>
                        <td> Geld-Zurück-Bonus (Cashback) </td>
                        <td> <CloseCircleOutlined style={{ color: '#d91e18' }} /> </td>
                    </tr>
                    <tr>
                        <td> Bonus-Punktesystem </td>
                        <td> <CloseCircleOutlined style={{ color: '#d91e18' }} /> </td>
                    </tr>
                    <tr>
                        <td> Startguthaben </td>
                        <td> <CloseCircleOutlined style={{ color: '#d91e18' }} /> </td>
                    </tr>
                    <tr>
                        <td> Tankrabatt </td>
                        <td> <CloseCircleOutlined style={{ color: '#d91e18' }} /></td>
                    </tr>
                    <tr>
                        <td> Rabatte auf Mietwagen </td>
                        <td> <CheckCircleOutlined style={{ color: '#7ab51d' }} /> </td>
                    </tr>
                    <tr>
                        <td> Reiserabatte </td>
                        <td> <CheckCircleOutlined style={{ color: '#7ab51d' }} /> </td>
                    </tr>
                    <tr>
                        <td> Hotelrabatte </td>
                        <td> <CloseCircleOutlined style={{ color: '#d91e18' }} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const bewertungTable = () => {
    return (
        <div className='tab-content table-2'>
            <table className="product-detail-table product-bewertung-table">
                <tbody>
                    <tr>
                        <td>
                            <MinusCircleOutlined style={{ color: '#d91e18' }} />
                            <b> Gebühren</b>
                            <span className="tipr" data-tip="Bewertet wird: Jahresgebühr, Kosten für Zahlungen und Abhebungen" data-hasqtip="7" aria-describedby="qtip-0"> <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851"></path>
                                <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851"></path>
                            </svg>
                            </span>
                        </td>
                        <td>8/11</td>
                    </tr>
                    <tr>
                        <td>
                            <MinusCircleOutlined style={{ color: '#d91e18' }} />
                            <b> Funktionen</b>
                            <span className="tipr" data-tip="Bewertet wird: Möglichkeiten für Rechnungsausgleich per Lastschrift, mobiles Bezahlen, Teilzahlung und Beantragung ohne Girokonto" data-hasqtip="8" aria-describedby="qtip-0">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851"></path>
                                    <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851"></path>
                                </svg>
                            </span>
                        </td>
                        <td>3/4</td>
                    </tr>
                    <tr>
                        <td>
                            <MinusCircleOutlined style={{ color: '#d91e18' }} />
                            <b> Zusatz-Leistungen</b>
                            <span className="tipr" data-tip="Bewertet wird: Versicherungen und Rabatte" data-hasqtip="9" aria-describedby="qtip-0">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851"></path>
                                    <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851"></path>
                                </svg>
                            </span>
                        </td>
                        <td>5/10</td>
                    </tr>
                    <tr>
                        <td>
                            <PlusCircleOutlined style={{ color: '#7ab51d' }} />
                            <b> Beantragung</b>
                            <span className="tipr" data-tip="Bewertet wird: Einfachheit des Antrags und Abschluss-Chance" data-hasqtip="10" aria-describedby="qtip-10">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6875 9.21875C1.6875 5.33586 4.83586 2.1875 8.71875 2.1875C12.6016 2.1875 15.75 5.33586 15.75 9.21875C15.75 13.1016 12.6016 16.25 8.71875 16.25C4.83586 16.25 1.6875 13.1016 1.6875 9.21875ZM8.71875 3.3125C5.45718 3.3125 2.8125 5.95718 2.8125 9.21875C2.8125 12.4803 5.45718 15.125 8.71875 15.125C11.9803 15.125 14.625 12.4803 14.625 9.21875C14.625 5.95718 11.9803 3.3125 8.71875 3.3125ZM7.17188 8.23438C7.17188 7.92371 7.42371 7.67188 7.73438 7.67188H8.85938C9.17004 7.67188 9.42188 7.92371 9.42188 8.23438V11.8906H10.4062C10.7169 11.8906 10.9688 12.1425 10.9688 12.4531C10.9688 12.7638 10.7169 13.0156 10.4062 13.0156H7.3125C7.00184 13.0156 6.75 12.7638 6.75 12.4531C6.75 12.1425 7.00184 11.8906 7.3125 11.8906H8.29688V8.79688H7.73438C7.42371 8.79688 7.17188 8.54504 7.17188 8.23438Z" fill="#101851"></path>
                                    <path d="M8.71875 5.07031C8.53797 5.07031 8.36124 5.12392 8.21092 5.22436C8.06061 5.3248 7.94345 5.46756 7.87427 5.63458C7.80508 5.8016 7.78698 5.98539 7.82225 6.1627C7.85752 6.34001 7.94458 6.50288 8.07241 6.63071C8.20024 6.75855 8.36311 6.8456 8.54043 6.88087C8.71774 6.91614 8.90152 6.89804 9.06855 6.82886C9.23557 6.75968 9.37833 6.64252 9.47877 6.4922C9.5792 6.34188 9.63281 6.16516 9.63281 5.98438C9.63281 5.74195 9.53651 5.50946 9.36509 5.33804C9.19367 5.16662 8.96117 5.07031 8.71875 5.07031Z" fill="#101851"></path>
                                </svg>
                            </span>
                        </td>
                        <td>13/15</td>
                    </tr>
                    <tr>
                        <td><b>Gesamt:</b></td>
                        <td><b>29/40</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopupDialog from './PopupDialog';

export function ContentProcessTable(props) {

    const { categoryName, categoryId, isError, setIsError} = props
    const [processes, setProcesses] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    const [process, setProcess] = useState([])
    const [histories, setHistories] = useState([])

    useEffect(() => {
        const url = "http://localhost:8080/CP_Dashboard/process/show";
        const postData = {
            id: categoryId
        }
        const header = {
             "Access-Control-Allow-Headers": "origin, content-type, accept, authorization",
             "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
             "Access-Control-Allow-Origin" : "http://localhost:3000",
             "Access-Control-Allow-Credentials":"true"
        }

        axios.post(url, postData, header)
            .then(response => {
                const processes = response.data
                console.log(processes);
                setProcesses(processes);
                setIsError(false);
            })
            .catch(error => {
                setIsError(true)
            })
    }, [])

    const sendProcessDetails = (process) => {
        setProcess(process);
        setHistories(process.histories)
        setOpenPopup(true);
    }

    const getColor = (status) => {
        switch (status) {
            case "Unknown":
            case 1:
                return 'dot-unknown'

            case "OK":
            case 2:
                return 'dot-ok'

            case "In Progress":
            case 3:
                return 'dot-inprogress'

            case "Complete, Status Unknown":
            case 4:
                return 'dot-complete'

            case "Warning":
            case 5:
                return 'dot-warning'

            case "Error":
            case 6:
                return 'dot-error'

            case "Intervention in Progress":
            case 7:
                return 'dot-intervention'

            case "Retired":
            case 8:
                return 'dot-retired'

            default:
                return 'dot-unknown'

        }
    }

    const changeColor = (run_status, hold_status) => {
        return (hold_status == 0) ? getColor(run_status) : getColor(hold_status);
    }
    const getProcssEndStatus = (run_ended, last_run_ended) => {
        if (run_ended === "------") {
            return last_run_ended
        } else {
            return run_ended
        }
    }

    const renderTableHeader = () => {
        return (
            <tr className="table_header">
                <td colSpan="2">{categoryName}</td>
                <td>Last build / execution</td>
                <td>Next build / execution</td>
                <td>Expected Customer Availablility</td>
            </tr>
        )
    }
    const renderTableRows = () => {
        return processes.map(process => {
            return (
                <tr key={process.id}>
                    <td className="first-column"><span className={changeColor(process.run_status, process.hold_status_at)}></span></td>
                    <td className="second-column">
                        <a className="btn content_click" onClick={() => { sendProcessDetails(process) }}>{process.name}</a>
                    </td>
                    <td>{getProcssEndStatus(process.run_ended, process.last_run_ended)}</td>
                    <td>{process.next_run_starts}</td>
                    <td>{process.expected_publication_date}</td>
                </tr>
            )
        })
    }
    return processes.length > 0
        ? (
            <div>
                <table>
                    <thead>
                        {renderTableHeader()}
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
                <PopupDialog openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    histories={histories}
                    process={process}
                />
            </div>
        ) : (
            <div>
            </div>
        )
}



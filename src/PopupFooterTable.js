import React from 'react'

export default function PopupFooterTable(props) {
    
    const {histories} = props

    const changeColor = (status) => {
        if (status == 1) {
            return 'dot_unknown'
        }
        else if (status == 2) {
            return 'dot-ok'
        }
        else if (status == 3) {
            return 'dot_inprogress'
        }
        else if (status == 4) {
            return 'dot_complete'
        }
        else if (status == 5) {
            return 'dot-warning'
        }
        else if (status == 6) {
            return 'dot-error'
        }
        else if (status == 7) {
            return 'dot-intervention'
        }
        else {
            return 'dot-retired'
        }

    }

    const renderHistoryTableHeader = () => {
        return (
            <tr className="history_table_header">
                <td>End Status</td>
                <td>Started</td>
                <td>Ended</td>
                <td>Duration</td>
            </tr>
        )
    }

    const renderHistoryTableRows = () => {
        return histories.map(history => {
            return (
                <tr key={history.id}>
                    <td className="first-column"><span className={changeColor(history.run_status)}></span></td>
                    <td>{history.run_started}</td>
                    <td>{history.run_ended}</td>
                    <td>{history.duration}</td>
                </tr>
            )
        })
    }

    return (
        <div className="modal-table">
            <span className="history-heading">Process history</span>
            <table className="history-table">
                <thead>
                    {renderHistoryTableHeader()}
                </thead>
                <tbody>
                    {renderHistoryTableRows()}
                </tbody>
            </table>
        </div>
    )
}

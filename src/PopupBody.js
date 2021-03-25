import React from 'react'
import Comment from './Comment.js'
export default function PopupBody(props) {

    const { process } = props

    const statusColor = (status) => {
        if (status == "Unknown") {
            return 'unknown'
        }
        else if (status == "OK") {
            return 'ok'
        }
        else if (status == "In Progress") {
            return 'inprogress'
        }
        else if (status == "Complete, Status Unknown") {
            return 'complete'
        }
        else if (status == "Warning") {
            return 'warning'
        }
        else if (status == "Error") {
            return 'error'
        }
        else if (status == "Intervention in Progress") {
            return 'intervention'
        }
        else {
            return 'retired'
        }
    }

    const getProcssEndStatus = (run_ended,last_run_ended) => {
        if(run_ended === "------"){
            return last_run_ended
        }else{
            return run_ended
        }
}
    return (
        <div>
            <table className="detail-table">
                <tbody>
                    <tr>
                        <td>Update Frequency</td>
                        <td>{process.execution_frequency}</td>
                    </tr>
                    <tr>
                        <td>Last run started</td>
                        <td>{process.run_started}</td>
                    </tr>
                    <tr>
                        <td>Last run ended</td>
                        <td>{getProcssEndStatus(process.run_ended, process.last_run_ended)}</td>
                    </tr>
                    <tr>
                        <td>Last run status</td>
                        <td>{process.latest_status_value}</td>
                    </tr>
                    <tr>
                        <td>Next run starts</td>
                        <td>{process.next_run_starts}</td>
                    </tr>
                    <tr>
                        <td>Current Status </td>
                        {/* Need to change the runstatus to history run status */}
                        <td className={statusColor(process.run_status)}><strong>{process.run_status}</strong></td>
                    </tr>
                    <tr>
                        <td>Comments</td>
                        <td><Comment comment={process.comments} processId={process.id} /></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

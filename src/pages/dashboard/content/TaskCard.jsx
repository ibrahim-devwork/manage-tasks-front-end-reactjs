import React, {memo} from "react";

const TaskCard = ({ task }) => {

    return (
        <div className="col w-100">
            <div className="card bg-light d-flex">
                <div className="card-header text-muted border-bottom-0">
                </div>
                <div className="card-body pt-0">
                    <div className="row">
                        <div className="col">
                            <h2 className="blockquote"><b>{task?.description}</b></h2>
                            <p className="text-muted text-sm"><b>Project : </b> {task?.project} </p>
                            <p className="text-muted text-sm"><b>Deadline : </b> {task?.deadline} </p>
                        </div>

                    </div>
                </div>
                <div className="card-footer">
                    <div className="text-right">
                        <span className="btn btn-sm bg-teal">
                            <i className="fas fa-comments"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(TaskCard);
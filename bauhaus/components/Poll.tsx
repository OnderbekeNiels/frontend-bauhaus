import React from "react";

export default function Poll(props) {
    return (
        <article className='c-poll'>
            <h3 className='u-text-subheadline u-mb--sm'>{props.title}</h3>
            <p className='u-text-highlighted u-mb--md'>{props.description}</p>
            <form action={props.destination}>
                {props.options && props.options.map(option => {
                    return(
                        <div className='c-poll-item'><input type="radio" name={option.name} id={option.value} value={option.value} />
                            <label className='c-poll-item__label u-text-information' htmlFor={option.value}>{option.label}</label>
                        </div>
                    )
                })}
                <input type='submit' className='c-button-cta' value={props.action}></input>
            </form>
        </article>

    )
}
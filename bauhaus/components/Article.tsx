import React from "react";
import Link from 'next/link'

export default function Article(props) {
    return (
        <article className='c-article--md'>
            <h3 className='u-text-subheadline u-mb--sm'>{props.title}</h3>
            <p className='c-article-info u-mb--md'>
                <span className='c-article-info__type u-color-theme'>{props.type}</span>
                <span> | {props.duration} | </span>
                <span>{props.date}</span>
            </p>
            <p className='u-text-highlighted u-mb--md'>{props.description}</p>
            <Link href="/">
                <a className='c-button-cta'>{props.type} NOW</a>
            </Link>
        </article>

    )
}
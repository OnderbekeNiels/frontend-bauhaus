import React from "react";
import Link from 'next/link'

export default function Article(props) {

    if (props.description) {
        return (
            <article className='c-article--md u-mb--lg'>
                <h3 className='u-text-subheadline u-mb--sm'>{props.title}</h3>

                <p className='c-article-info u-mb--md'>
                    <span className='c-article-info__type u-color-theme'>{props.type}</span>
                    <span> | {props.duration} | </span>
                    <span>{props.date}</span>
                </p>
                <p className='u-text-highlighted u-mb--md'>{props.description}</p>
                <Link href="/">
                    <a className='c-button-cta'>{props.action}</a>
                </Link>
            </article>
        )
    }
    else {
        return (
            <article className='c-article--lg u-mb--lg'>
                <h3 className='u-text-subheadline u-mb--sm'>{props.title}</h3>
                <div className='c-article-small__content'>
                    <p className='c-article-info u-mb--md'>
                        <span className='c-article-info__type u-color-theme'>{props.type}</span>
                        <span> | {props.duration} | </span>
                        <span>{props.date}</span>
                    </p>
                    <Link href="/">
                        <a className='c-button-cta'>{props.action}</a>
                    </Link>
                </div>
            </article>
        )
    }


}
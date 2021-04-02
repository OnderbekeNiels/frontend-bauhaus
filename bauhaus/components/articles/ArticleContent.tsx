import React from "react";
import Link from 'next/link'

export default function ArticleContent(props) {

    return (
        <article className={props.headliner ? 'c-article c-article--xl' : props.description ? 'c-article c-article--md' : 'c-article c-article--lg'}>
            {!props.headliner && props.description && <hr className="c-article__splitter" />
            }
            <div className='c-article__content'>
                <h3 className={props.headliner ? 'u-text-headline--sm u-mb--xxl' : 'u-text-subheadline u-mb--sm'}>{props.title}</h3>
                <div className={props.description ? '' : 'c-article-small__content'}>
                    <p className='c-article-info u-mb--md'>
                        <span className='c-article-info__type u-color-theme'>{props.type}</span>
                        <span> | {props.duration} | </span>
                        <span>{props.date}</span>
                    </p>
                    {props.description && <p className='u-text-highlighted u-mb--md'>{props.description}</p>}
                    <Link href="/">
                        <a className='c-button-cta'>{props.action}</a>
                    </Link>
                </div>
            </div>
        </article>
    )

}
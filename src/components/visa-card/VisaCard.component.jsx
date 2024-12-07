import { Icon } from "@iconify/react"
import "./VisaCard.style.css"
import React from "react"
import Field from "@components/field"

function VisaCard({ className }) {
    return (
        <div className={"visa-card-container " + className}>
            <div className="card-visuals">
                <div className="card-visuals__circle--left"></div>
                <div className="card-visuals__circle--right"></div>
                <div className="card-visuals__card">
                    {renderHeader()}
                    {renderContent()}
                    {renderFooter()}
                </div>
            </div>
            {renderProjectStats()}
            {renderLifeTimeSales()}
            <div className="more-info-buttons">
                <Field
                    type="button"
                    value="View Project"
                    className="more-info-buttons__view-project" />
                <Field
                    type="button"
                    value="Analytics"
                    className="more-info-buttons__analytics" />
            </div>
        </div>
    )

    function renderHeader() {
        return (
            <div className="card-visuals__header">
                <div className="card-visuals__header--info">
                    <div className="card-visuals__title">VISA</div>
                    <div className="card-visuals__subtitle">PREMIUM ACCOUNT</div>
                </div>
                <div className="card-visuals__header--circles">
                    <div className="card-circle--left"></div>
                    <div className="card-circle--right"></div>
                </div>
            </div>
        )
    }

    function renderContent() {
        return (
            <div className="card-visuals__content">
                <span>5789</span><span>****</span><span>****</span><span>2847</span>
            </div>
        )
    }

    function renderFooter() {
        return (
            <div className="card-visuals__footer">
                <div className="owner-info">
                    <div className="card-holder">Card holder</div>
                    <div className="owner-name">Mike Smith</div>
                </div>
                <div className="exp-info">
                    <div className="exp-info__title">Expire date</div>
                    <div className="exp-info__date">12/24</div>
                </div>
            </div>
        )
    }

    function renderProjectStats() {
        return (
            <div className="project-states">
                <div className="products">
                    <Icon icon="ph:tea-bag-fill" width={50} />
                    <div className="products__right-group">
                        <span className="products__stat">1153</span>
                        <span className="products__title">Products</span>
                    </div>
                </div>
                <div className="order-served">
                    <Icon icon="solar:cart-large-2-bold" width={50} />
                    <div className="products__right-group">
                        <span className="products__stat">81K</span>
                        <span className="products__title">Order Served</span>
                    </div>
                </div>
            </div>
        )
    }

    function renderLifeTimeSales() {
        return (
            <div className="life-time-sales">
                <div className="life-time-sales__container">
                    <span className="life-time-sales__amount">$4,050,12,300</span>
                    <span className="life-time-sales__tag">YoY 24%</span>
                </div>
                <div className="life-time-sales__title">Life time sales</div>
            </div>
        )
    }
}

export default VisaCard;

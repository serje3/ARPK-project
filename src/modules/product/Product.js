import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../common";
import { useProductBreadcrumb } from "./components/hooks/useProductBreadcrumb";
import { BuyModalForm } from "./components/BuyModal";
import { settings } from "../../settings";
import { ProductInfo } from "./components/ProductInfo";
import { useProductData } from "./components/hooks/useProductData";
import { Helmet } from "react-helmet-async";
import BetterInvisibleSmartCaptcha from "../common/captcha/BetterInvisibleSmartCaptcha";


export const Product = () => {
    let { id } = useParams()
    const [product_data, isEmpty] = useProductData(id)
    const [buyModalIsOpen, setBuyModalIsOpen] = useState(false);

    const [visible, setVisible] = useState(false)
    const [token, setToken] = useState('')

    return (
        <>
            {
                isEmpty ?
                    null :
                    <Helmet>
                        <title>{product_data.name}</title>
                        <meta name="description" content={product_data.description}/>
                        <link rel="canonical" href={settings.routes.getProductRoute(id)}/>
                    </Helmet>
            }
            <div className="product_page">
                <Breadcrumb usePageManager={useProductBreadcrumb}/>
                {
                    isEmpty ?
                        <ProductInfo.EmptyBound/>
                        :
                        <>
                            <ProductInfo
                                product_data={product_data}
                                setModalOpen={() => setBuyModalIsOpen(true)}
                            />
                            <BuyModalForm
                                modalIsOpen={buyModalIsOpen}
                                setIsOpen={setBuyModalIsOpen}
                                product={product_data}
                                setVisible={(bool) => setVisible(bool)}
                                token={token}
                                setToken={(_token) => setToken(_token)}
                            />
                        </>
                }
                <BetterInvisibleSmartCaptcha
                    sitekey={settings.yandexSmartCaptchaToken}
                    onSuccess={setToken}
                    onChallengeHidden={() => setVisible(false)}
                    visible={visible}
                    hideShield={true}/>
            </div>
        </>
    )
}
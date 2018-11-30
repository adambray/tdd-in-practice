import React from 'react'
import { FeatureLine, FeatureSlide } from '../FeatureSlide'

export const PivotalLabs = props => (
  <FeatureSlide title="Pivotal Labs" icon="star">
    <FeatureLine show={props.index >= 1}>Shipping software...</FeatureLine> 
    <FeatureLine show={props.index >= 2}>...in Balanced Teams</FeatureLine> 
    <FeatureLine show={props.index >= 3}>...with Lean UCD</FeatureLine> 
    <FeatureLine show={props.index >= 4}>...and Extreme Programming</FeatureLine> 
  </FeatureSlide>
)

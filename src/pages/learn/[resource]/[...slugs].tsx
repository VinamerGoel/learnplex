import { useRouter } from 'next/router'
import React from 'react'

import ResourcePageV2 from '../../../components/v2/ResourcePage'
import { SEO } from '../../../components/SEO'
import { titleCase } from '../../../utils/titleCase'

export default function ViewPrimaryResourcePageV2() {
  const router = useRouter()
  const resourceSlug = router.query.resource as string
  const slugs = router.query.slugs as string[]

  return (
    <>
      <SEO title={titleCase(slugs[slugs.length - 1])} />
      <ResourcePageV2
        inEditMode={false}
        slugs={slugs}
        resourceSlug={resourceSlug}
      />
    </>
  )
}

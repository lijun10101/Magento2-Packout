<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Packout\Home\Controller\Index;

use Magento\Framework\App\ActionInterface;
use Magento\Framework\View\Result\PageFactory;
use Magento\Framework\App\Action\Context;

class Index implements ActionInterface
{
    /**
     * @var JsonFactory
     */
    protected $resultPageFactory;

    /**
     * @param JsonFactory $resultJsonFactory
     */
    public function __construct(
        Context $context,
        PageFactory $resultPageFactory
    ) {
        $this->resultPageFactory = $resultPageFactory;
    }

    /**
     * Blog Index, shows a list of recent blog posts.
     *
     * @return \Magento\Framework\View\Result\PageFactory
     */
    public function execute()
    {
        return $this->resultPageFactory->create();
    }
}

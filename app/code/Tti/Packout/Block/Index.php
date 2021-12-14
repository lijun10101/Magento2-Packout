<?php
namespace Tti\Packout\Block;

use Magento\Framework\View\Element\Template;
use Magento\Framework\DataObject\IdentityInterface;

class Index extends Template {
    /**
     * Construct
     *
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Ashsmith\Blog\Model\ResourceModel\Post\CollectionFactory $postCollectionFactory,
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        array $data = []
    ) {
        parent::__construct($context, $data);
    }

    public function sayHello() {
	    return __('Hello World');
    }
}
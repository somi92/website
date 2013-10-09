<?php

	/**
	 * 
	 */
	class Post {
		
		private $post_heading;
		private $post_content;
		
		
		public function Post($heading, $content) {
			$this->post_heading = "<h2>$heading</h2>";
			$this->post_content = "<h2>$content</h2>";
		}
		
		public function setHeading($heading) {
			$this->post_heading = "<h2>$heading</h2>";
		}
		
		public function setContent($content) {
			$this->post_content = "<h2>$content</h2>";;
		}
		
		public function getHeading() {
			return $this->post_heading;
		}
		
		public function getContent() {
			return $this->post_content;
		}
		
	}
	
	
?>